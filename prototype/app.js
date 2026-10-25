/**
 * Wellbeing Nutrition Korean Marine Collagen Peptides
 * Main Application Script — Phase 3 CRO Prototype
 * 
 * Features:
 * 1. A/B Variant State Management (?variant=unit_pricing vs ?variant=control)
 * 2. Dynamic Pack Sizing & Unit Price Recalculation
 * 3. Interactive Product Media Gallery
 * 4. Local Deterministic Product Guide AI Assistant
 * 5. Multi-Filter & Search Customer Review Explorer
 * 6. 14-Day Starter Pack Concept Simulator
 * 7. Simulated Cart & GoKwik Checkout Drawer
 * 8. Real-time Local Telemetry Event Logger (Measurement Demo)
 */

(function () {
  'use strict';

  // -------------------------------------------------------------
  // STATE MANAGEMENT
  // -------------------------------------------------------------
  const state = {
    currentVariant: 'unit_pricing', // default A/B test variant
    selectedPackId: 'pack_1',
    cart: [],
    activeGalleryIndex: 0,
    reviewFilter: {
      search: '',
      mix: 'all',
      sort: 'helpful',
      page: 1,
      pageSize: 6
    },
    eventLog: []
  };

  // -------------------------------------------------------------
  // TELEMETRY LOGGER (Measurement Plan Demonstration)
  // -------------------------------------------------------------
  const eventLogger = {
    track: function (eventName, payload) {
      const entry = {
        id: 'evt_' + Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toLocaleTimeString(),
        name: eventName,
        payload: payload || {}
      };
      state.eventLog.unshift(entry);
      this.render();
    },

    render: function () {
      const logBody = document.getElementById('event-log-body');
      const logCount = document.getElementById('event-log-count');
      if (!logBody) return;

      if (logCount) logCount.textContent = state.eventLog.length;

      logBody.innerHTML = state.eventLog.slice(0, 30).map(function (item) {
        return (
          '<div class="log-entry">' +
            '<span class="log-time">' + item.timestamp + '</span>' +
            '<span class="log-name">' + item.name + '</span>' +
            '<span class="log-payload">' + JSON.stringify(item.payload) + '</span>' +
          '</div>'
        );
      }).join('');
    }
  };

  // -------------------------------------------------------------
  // 1. A/B EXPERIMENT PREVIEW MODE
  // -------------------------------------------------------------
  function initExperimentMode() {
    const urlParams = new URLSearchParams(window.location.search);
    const variantParam = urlParams.get('variant');

    if (variantParam === 'control') {
      state.currentVariant = 'control';
    } else {
      state.currentVariant = 'unit_pricing';
    }

    applyExperimentVariant(state.currentVariant);

    const btnControl = document.getElementById('btn-toggle-control');
    const btnVariant = document.getElementById('btn-toggle-variant');

    if (btnControl && btnVariant) {
      btnControl.addEventListener('click', function () {
        switchVariant('control');
      });
      btnVariant.addEventListener('click', function () {
        switchVariant('unit_pricing');
      });
    }
  }

  function switchVariant(variant) {
    state.currentVariant = variant;
    const url = new URL(window.location);
    url.searchParams.set('variant', variant);
    window.history.replaceState({}, '', url);

    applyExperimentVariant(variant);

    eventLogger.track('experiment_variant_switched', {
      variant: variant,
      description: variant === 'unit_pricing' ? 'Showing unit pricing per serving' : 'Hiding unit pricing'
    });
  }

  function applyExperimentVariant(variant) {
    const label = document.getElementById('current-variant-label');
    const btnControl = document.getElementById('btn-toggle-control');
    const btnVariant = document.getElementById('btn-toggle-variant');
    const unitPriceElements = document.querySelectorAll('.unit-pricing-element');

    if (variant === 'control') {
      if (label) label.textContent = 'Control (Unit Pricing Hidden)';
      if (btnControl) btnControl.classList.add('active');
      if (btnVariant) btnVariant.classList.remove('active');

      unitPriceElements.forEach(function (el) {
        el.style.display = 'none';
      });
    } else {
      if (label) label.textContent = 'Variant B: Unit-Pricing Active (CRO Core Intervention 1)';
      if (btnVariant) btnVariant.classList.add('active');
      if (btnControl) btnControl.classList.remove('active');

      unitPriceElements.forEach(function (el) {
        el.style.display = '';
      });
    }
  }

  // -------------------------------------------------------------
  // 2. PACK SELECTION & RECALCULATION (INTERVENTION 1)
  // -------------------------------------------------------------
  function initPackSelector() {
    const packCards = document.querySelectorAll('.pack-card');
    const heroPrice = document.getElementById('hero-cta-price');
    const stickyTitle = document.getElementById('sticky-pack-title');
    const stickyUnit = document.getElementById('sticky-pack-unit');

    packCards.forEach(function (card) {
      card.addEventListener('click', function () {
        const packId = card.getAttribute('data-pack-id');
        selectPack(packId);
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const packId = card.getAttribute('data-pack-id');
          selectPack(packId);
        }
      });
    });

    // Select initial pack
    selectPack(state.selectedPackId);
  }

  function selectPack(packId) {
    state.selectedPackId = packId;
    const pack = window.PRODUCT_DATA.packs.find(function (p) { return p.id === packId; });
    if (!pack) return;

    // Update UI card selection
    document.querySelectorAll('.pack-card').forEach(function (card) {
      const isCurrent = card.getAttribute('data-pack-id') === packId;
      card.classList.toggle('selected', isCurrent);
      card.setAttribute('aria-checked', isCurrent ? 'true' : 'false');
    });

    // Update CTA button price
    const heroPrice = document.getElementById('hero-cta-price');
    if (heroPrice) {
      heroPrice.textContent = '₹' + pack.price.toLocaleString('en-IN');
    }

    // Update Sticky mobile tray
    const stickyTitle = document.getElementById('sticky-pack-title');
    const stickyUnit = document.getElementById('sticky-pack-unit');
    if (stickyTitle) {
      stickyTitle.textContent = pack.title + ': ₹' + pack.price.toLocaleString('en-IN');
    }
    if (stickyUnit) {
      stickyUnit.textContent = '₹' + pack.pricePerServing.toFixed(2) + ' / serving · ' + pack.servings + ' Servings';
    }

    // If pack has specific image, sync gallery
    if (pack.tubs >= 2) {
      const matchThumb = document.querySelector('.thumbnail-btn[data-src="' + pack.image + '"]');
      if (matchThumb) {
        setMainGalleryImage(pack.image, matchThumb);
      }
    } else {
      const firstThumb = document.querySelector('.thumbnail-btn[data-index="0"]');
      if (firstThumb) {
        setMainGalleryImage(window.PRODUCT_DATA.gallery[0].src, firstThumb);
      }
    }

    eventLogger.track('variant_selected', {
      pack_id: pack.id,
      pack_title: pack.title,
      price_inr: pack.price,
      price_per_serving_inr: pack.pricePerServing,
      servings: pack.servings,
      experiment_variant: state.currentVariant
    });
  }

  // -------------------------------------------------------------
  // 3. PRODUCT GALLERY
  // -------------------------------------------------------------
  function initGallery() {
    const thumbBtns = document.querySelectorAll('.thumbnail-btn');
    thumbBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const src = btn.getAttribute('data-src');
        setMainGalleryImage(src, btn);
      });
    });
  }

  function setMainGalleryImage(src, activeBtn) {
    const mainImg = document.getElementById('main-product-img');
    if (mainImg) {
      mainImg.src = src;
    }

    document.querySelectorAll('.thumbnail-btn').forEach(function (b) {
      const isActive = (b === activeBtn);
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    eventLogger.track('gallery_swiped', {
      image_src: src,
      interaction: 'thumbnail_click'
    });
  }

  // -------------------------------------------------------------
  // 4. EVIDENCE CARDS RENDER
  // -------------------------------------------------------------
  function renderClinicalStudies() {
    const container = document.getElementById('evidence-cards-container');
    if (!container || !window.PRODUCT_DATA.clinicalStudies) return;

    container.innerHTML = window.PRODUCT_DATA.clinicalStudies.map(function (study) {
      return (
        '<div class="evidence-card">' +
          '<div>' +
            '<div class="evidence-header">' +
              '<span class="evidence-journal">' + study.journal + '</span>' +
              '<span class="evidence-year">Published: ' + study.year + '</span>' +
            '</div>' +
            '<h4 style="margin-top: 0.5rem;">' + study.title + '</h4>' +
            '<p class="evidence-finding" style="margin-top: 0.75rem;">' + study.keyFinding + '</p>' +
          '</div>' +
          '<div class="evidence-footer">' +
            '<div><strong>Study Scope:</strong> ' + study.sampleSize + ' (' + study.duration + ')</div>' +
            '<div style="font-style: italic; margin-top: 0.25rem;">Note: ' + study.limitationNote + '</div>' +
            '<a href="' + study.doiUrl + '" target="_blank" rel="noopener noreferrer" class="evidence-doi-link">' +
              'View Official DOI Reference ↗' +
            '</a>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  // -------------------------------------------------------------
  // 5. PACK COMPARISON TABLE
  // -------------------------------------------------------------
  function renderComparisonTable() {
    const tbody = document.getElementById('comparison-table-body');
    if (!tbody || !window.PRODUCT_DATA.packs) return;

    tbody.innerHTML = window.PRODUCT_DATA.packs.map(function (p) {
      return (
        '<tr>' +
          '<td><strong>' + p.title + '</strong> <span style="font-size: 0.75rem; color: #0D9488;">(' + p.badge + ')</span></td>' +
          '<td>' + p.weightGrams + ' g</td>' +
          '<td>' + p.servings + ' servings</td>' +
          '<td>₹' + p.price.toLocaleString('en-IN') + ' <span style="font-size: 0.75rem; color: #94A3B8; text-decoration: line-through;">₹' + p.mrp + '</span></td>' +
          '<td class="highlight-col">₹' + p.pricePerServing.toFixed(2) + ' / serving</td>' +
          '<td>' + p.durationLabel + '</td>' +
          '<td>' +
            '<button type="button" class="variant-btn" style="background: #0F172A; color: #fff;" onclick="window.selectPackAndScroll(\'' + p.id + '\')">' +
              'Select Pack' +
            '</button>' +
          '</td>' +
        '</tr>'
      );
    }).join('');
  }

  window.selectPackAndScroll = function (packId) {
    selectPack(packId);
    const hero = document.getElementById('hero');
    if (hero) hero.scrollIntoView({ behavior: 'smooth' });
  };

  // -------------------------------------------------------------
  // 6. CUSTOMER REVIEW EXPLORER (INTERVENTION 3)
  // -------------------------------------------------------------
  function initReviewExplorer() {
    const searchInput = document.getElementById('review-search-input');
    const sortSelect = document.getElementById('review-sort-select');
    const filterPills = document.querySelectorAll('.review-filters-group .filter-pill');

    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        state.reviewFilter.search = e.target.value.toLowerCase().trim();
        state.reviewFilter.page = 1;
        renderReviews();
        eventLogger.track('review_search_queried', { keyword: state.reviewFilter.search });
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', function (e) {
        state.reviewFilter.sort = e.target.value;
        state.reviewFilter.page = 1;
        renderReviews();
        eventLogger.track('review_sort_changed', { sort: state.reviewFilter.sort });
      });
    }

    filterPills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        filterPills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');

        state.reviewFilter.mix = pill.getAttribute('data-value');
        state.reviewFilter.page = 1;
        renderReviews();
        eventLogger.track('review_filter_applied', { mix_filter: state.reviewFilter.mix });
      });
    });

    renderReviews();
  }

  function getFilteredReviews() {
    if (!window.REVIEWS_DEMO_DATA || !window.REVIEWS_DEMO_DATA.items) return [];

    let list = window.REVIEWS_DEMO_DATA.items.slice();

    // 1. Keyword search
    if (state.reviewFilter.search) {
      const q = state.reviewFilter.search;
      list = list.filter(function (r) {
        return (
          r.title.toLowerCase().indexOf(q) !== -1 ||
          r.body.toLowerCase().indexOf(q) !== -1 ||
          r.mixRoutine.toLowerCase().indexOf(q) !== -1 ||
          r.author.toLowerCase().indexOf(q) !== -1
        );
      });
    }

    // 2. Mix routine filter
    if (state.reviewFilter.mix !== 'all') {
      list = list.filter(function (r) {
        return r.mixRoutine === state.reviewFilter.mix;
      });
    }

    // 3. Sorting
    if (state.reviewFilter.sort === 'helpful') {
      list.sort(function (a, b) { return b.helpfulCount - a.helpfulCount; });
    } else if (state.reviewFilter.sort === 'recent') {
      list.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
    } else if (state.reviewFilter.sort === 'highest') {
      list.sort(function (a, b) { return b.rating - a.rating; });
    } else if (state.reviewFilter.sort === 'critical') {
      list.sort(function (a, b) { return a.rating - b.rating; });
    }

    return list;
  }

  function renderReviews() {
    const container = document.getElementById('reviews-list-container');
    const pagination = document.getElementById('reviews-pagination');
    if (!container) return;

    const filtered = getFilteredReviews();

    if (filtered.length === 0) {
      container.innerHTML = (
        '<div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: #fff; border: 1px dashed #CBD5E1; border-radius: 12px;">' +
          '<p style="font-size: 1.125rem; font-weight: 700; color: #0F172A;">No matching reviews found</p>' +
          '<p style="font-size: 0.875rem; color: #64748B; margin-top: 0.25rem;">Try searching for "coffee", "smell", "water", or reset your filters.</p>' +
          '<button type="button" class="variant-btn" style="margin-top: 1rem; background: #0D9488; color: #fff;" onclick="window.resetReviewFilters()">' +
            'Reset Review Filters' +
          '</button>' +
        '</div>'
      );
      if (pagination) pagination.innerHTML = '';
      return;
    }

    // Pagination slice
    const start = (state.reviewFilter.page - 1) * state.reviewFilter.pageSize;
    const end = start + state.reviewFilter.pageSize;
    const pageItems = filtered.slice(start, end);

    container.innerHTML = pageItems.map(function (rev) {
      const stars = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);
      const verifiedTag = rev.verified 
        ? '<span class="verified-tag">✓ Verified Purchaser</span>'
        : '<span style="color: #94A3B8;">Reviewer</span>';

      const brandReply = rev.brandResponse
        ? '<div class="brand-response-box"><strong>Wellbeing Nutrition Team Response:</strong>' + rev.brandResponse + '</div>'
        : '';

      return (
        '<article class="review-card">' +
          '<div class="review-card-header">' +
            '<div class="reviewer-info">' +
              '<span class="reviewer-name">' + rev.author + '</span>' +
              '<span class="reviewer-meta">' + rev.location + ' · ' + verifiedTag + ' · ' + rev.date + '</span>' +
            '</div>' +
            '<span class="review-stars" aria-label="' + rev.rating + ' out of 5 stars">' + stars + '</span>' +
          '</div>' +
          '<h4 class="review-title">' + rev.title + '</h4>' +
          '<p class="review-body">' + rev.body + '</p>' +
          '<div class="review-badges-row">' +
            '<span class="review-tag">Duration: ' + rev.usageDuration + '</span>' +
            '<span class="review-tag">Mix: ' + rev.mixRoutine + '</span>' +
          '</div>' +
          brandReply +
          '<div class="review-footer">' +
            '<span>Was this review helpful?</span>' +
            '<button type="button" class="helpful-btn" data-rev-id="' + rev.id + '" onclick="window.upvoteReview(\'' + rev.id + '\', this)">' +
              '👍 Helpful (' + rev.helpfulCount + ')' +
            '</button>' +
          '</div>' +
        '</article>'
      );
    }).join('');

    // Render Pagination
    if (pagination) {
      const totalPages = Math.ceil(filtered.length / state.reviewFilter.pageSize);
      if (totalPages <= 1) {
        pagination.innerHTML = '';
      } else {
        let pagesHtml = '';
        for (let i = 1; i <= totalPages; i++) {
          const activeClass = (i === state.reviewFilter.page) ? 'active' : '';
          pagesHtml += '<button type="button" class="page-btn ' + activeClass + '" onclick="window.goToReviewPage(' + i + ')">' + i + '</button>';
        }
        pagination.innerHTML = pagesHtml;
      }
    }
  }

  window.resetReviewFilters = function () {
    state.reviewFilter.search = '';
    state.reviewFilter.mix = 'all';
    state.reviewFilter.sort = 'helpful';
    state.reviewFilter.page = 1;

    const searchInput = document.getElementById('review-search-input');
    if (searchInput) searchInput.value = '';

    document.querySelectorAll('.review-filters-group .filter-pill').forEach(function (p) {
      p.classList.toggle('active', p.getAttribute('data-value') === 'all');
    });

    renderReviews();
  };

  window.goToReviewPage = function (pageNum) {
    state.reviewFilter.page = pageNum;
    renderReviews();
    const reviewsSec = document.getElementById('reviews');
    if (reviewsSec) reviewsSec.scrollIntoView({ behavior: 'smooth' });
  };

  window.upvoteReview = function (revId, btn) {
    if (btn.classList.contains('voted')) return;
    const rev = window.REVIEWS_DEMO_DATA.items.find(function (r) { return r.id === revId; });
    if (rev) {
      rev.helpfulCount += 1;
      btn.textContent = '👍 Helpful (' + rev.helpfulCount + ')';
      btn.classList.add('voted');
      eventLogger.track('review_helpful_upvoted', { review_id: revId, author: rev.author });
    }
  };

  // -------------------------------------------------------------
  // 7. PRODUCT GUIDE AI AGENT (INTERVENTION 2)
  // -------------------------------------------------------------
  function initProductGuide() {
    // Embedded section form
    const embedForm = document.getElementById('embedded-guide-form');
    const embedInput = document.getElementById('embedded-guide-input');
    const embedChips = document.querySelectorAll('#embedded-guide-chips .guide-chip');

    if (embedForm) {
      embedForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const q = embedInput.value.trim();
        if (q) {
          handleGuideQuery(q, 'embedded');
          embedInput.value = '';
        }
      });
    }

    embedChips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        const query = chip.getAttribute('data-query');
        handleGuideQuery(query, 'embedded');
      });
    });

    // Modal drawer triggers
    const btnFloatingOpen = document.getElementById('btn-floating-guide-open');
    const btnHeroOpen = document.getElementById('btn-hero-open-guide');
    const btnModalClose = document.getElementById('btn-modal-guide-close');
    const modalOverlay = document.getElementById('guide-modal-overlay');

    if (btnFloatingOpen) {
      btnFloatingOpen.addEventListener('click', function () {
        openGuideModal();
      });
    }

    if (btnHeroOpen) {
      btnHeroOpen.addEventListener('click', function () {
        openGuideModal();
      });
    }

    if (btnModalClose) {
      btnModalClose.addEventListener('click', function () {
        closeGuideModal();
      });
    }

    if (modalOverlay) {
      modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) closeGuideModal();
      });
    }

    // Modal form
    const modalForm = document.getElementById('modal-guide-form');
    const modalInput = document.getElementById('modal-guide-input');
    const modalChips = document.querySelectorAll('#modal-guide-chips .guide-chip');

    if (modalForm) {
      modalForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const q = modalInput.value.trim();
        if (q) {
          handleGuideQuery(q, 'modal');
          modalInput.value = '';
        }
      });
    }

    modalChips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        const query = chip.getAttribute('data-query');
        handleGuideQuery(query, 'modal');
      });
    });
  }

  function openGuideModal() {
    const modal = document.getElementById('guide-modal-overlay');
    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      eventLogger.track('guide_modal_opened', { source: 'button_trigger' });
    }
  }

  function closeGuideModal() {
    const modal = document.getElementById('guide-modal-overlay');
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  function handleGuideQuery(userQuery, targetContext) {
    const targetBodyId = targetContext === 'modal' ? 'modal-chat-body' : 'embedded-chat-body';
    const chatBody = document.getElementById(targetBodyId);
    if (!chatBody) return;

    // Append user bubble
    appendChatBubble(chatBody, 'user', userQuery);

    // Search local deterministic knowledge base
    const match = findKnowledgeMatch(userQuery);

    setTimeout(function () {
      if (match) {
        const answerHtml = match.answer + 
          '<div class="message-source-citation"><strong>Source:</strong> ' + match.source + ' (' + match.confidence + ')</div>';
        appendChatBubble(chatBody, 'assistant', answerHtml);

        eventLogger.track('guide_intent_matched', {
          user_query: userQuery,
          matched_intent: match.id,
          source: match.source
        });
      } else {
        // Safe Fallback
        const fallbackHtml = 
          "I don't have verified documentation from Wellbeing Nutrition regarding that specific inquiry. " +
          "What I can confirm is that this product contains pure hydrolyzed Type I & III Korean marine collagen with no added sugar or artificial fillers. " +
          '<div class="message-source-citation">For specialized medical or batch inquiries, contact: <a href="mailto:care@wellbeingnutrition.com" style="color: #0D9488; font-weight: 600;">care@wellbeingnutrition.com</a></div>';
        
        appendChatBubble(chatBody, 'assistant', fallbackHtml);

        eventLogger.track('guide_fallback_triggered', {
          unmatched_query: userQuery,
          escalation_offered: 'care@wellbeingnutrition.com'
        });
      }

      chatBody.scrollTop = chatBody.scrollHeight;
    }, 250);
  }

  function appendChatBubble(container, sender, htmlContent) {
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble ' + sender;
    bubble.innerHTML = htmlContent;
    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
  }

  function findKnowledgeMatch(query) {
    const qLower = query.toLowerCase();
    const kb = window.PRODUCT_DATA.knowledgeBase;
    if (!kb) return null;

    let bestMatch = null;
    let highestScore = 0;

    for (let i = 0; i < kb.length; i++) {
      const item = kb[i];
      let score = 0;
      for (let k = 0; k < item.keywords.length; k++) {
        const kw = item.keywords[k].toLowerCase();
        if (qLower.indexOf(kw) !== -1) {
          score += 2;
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    return highestScore >= 2 ? bestMatch : null;
  }

  // -------------------------------------------------------------
  // 8. STARTER PACK SIMULATOR (INTERVENTION 4)
  // -------------------------------------------------------------
  function initStarterPackConcept() {
    const btnSimulate = document.getElementById('btn-simulate-starter-pack');
    if (!btnSimulate) return;

    btnSimulate.addEventListener('click', function () {
      const concept = window.PRODUCT_DATA.starterConcept;
      const simModal = document.createElement('div');
      simModal.className = 'modal-overlay active';
      simModal.innerHTML = (
        '<div class="modal-sheet" style="padding: 1.75rem;">' +
          '<div style="text-align: center;">' +
            '<span style="font-size: 2.5rem;">🎉</span>' +
            '<h3 style="margin-top: 0.5rem; font-size: 1.25rem; font-weight: 800; color: #0F172A;">Starter Pack Trial Simulated</h3>' +
            '<p style="font-size: 0.875rem; color: #475569; margin-top: 0.5rem;">' +
              'You explored the 14-day Starter Pack concept (₹999 / 14 servings). ' +
              'In production, this order unlocks a digital <strong>₹200 repeat voucher</strong> valid for 21 days toward your first 200 g tub.' +
            '</p>' +
            '<div style="background: #F0FDFA; border: 1px dashed #0D9488; border-radius: 8px; padding: 0.75rem; margin-top: 1rem; font-size: 0.8125rem; color: #0F766E;">' +
              'Simulated Code: <strong>STARTER200-DEMO</strong>' +
            '</div>' +
            '<button type="button" class="variant-btn" style="margin-top: 1.25rem; width: 100%; padding: 0.75rem; background: #0D9488; color: #fff; font-weight: 700; border-radius: 8px;" id="btn-close-sim-modal">' +
              'Return to Prototype' +
            '</button>' +
          '</div>' +
        '</div>'
      );

      document.body.appendChild(simModal);

      document.getElementById('btn-close-sim-modal').addEventListener('click', function () {
        simModal.remove();
      });

      simModal.addEventListener('click', function (e) {
        if (e.target === simModal) simModal.remove();
      });

      eventLogger.track('starter_concept_simulated', {
        concept_price_inr: concept.proposedPrice,
        voucher_offered_inr: concept.repeatVoucherValue,
        purpose: 'Taste and habit trial evaluation'
      });
    });
  }

  // -------------------------------------------------------------
  // 9. SIMULATED CART & CHECKOUT
  // -------------------------------------------------------------
  function initCartAndCheckout() {
    const btnHeroAdd = document.getElementById('btn-hero-add-to-cart');
    const btnStickyAdd = document.getElementById('btn-sticky-add-to-cart');
    const btnGoKwik = document.getElementById('btn-hero-gokwik-buy');
    const btnCartClose = document.getElementById('btn-cart-close');
    const cartOverlay = document.getElementById('cart-drawer-overlay');
    const btnSimCheckout = document.getElementById('btn-sim-checkout');
    const headerCartBtn = document.getElementById('btn-open-cart');

    if (btnHeroAdd) {
      btnHeroAdd.addEventListener('click', function () {
        addToCart(state.selectedPackId, 'hero_buy_box');
      });
    }

    if (btnStickyAdd) {
      btnStickyAdd.addEventListener('click', function () {
        addToCart(state.selectedPackId, 'mobile_sticky_tray');
      });
    }

    if (btnGoKwik) {
      btnGoKwik.addEventListener('click', function () {
        addToCart(state.selectedPackId, 'gokwik_1click');
        openCartDrawer();
      });
    }

    if (headerCartBtn) {
      headerCartBtn.addEventListener('click', function () {
        openCartDrawer();
      });
    }

    if (btnCartClose) {
      btnCartClose.addEventListener('click', function () {
        closeCartDrawer();
      });
    }

    if (cartOverlay) {
      cartOverlay.addEventListener('click', function (e) {
        if (e.target === cartOverlay) closeCartDrawer();
      });
    }

    if (btnSimCheckout) {
      btnSimCheckout.addEventListener('click', function () {
        simulateCheckoutCompletion();
      });
    }
  }

  function addToCart(packId, triggerLocation) {
    const pack = window.PRODUCT_DATA.packs.find(function (p) { return p.id === packId; });
    if (!pack) return;

    state.cart.push(pack);
    updateCartUI();
    openCartDrawer();

    eventLogger.track('add_to_cart', {
      pack_id: pack.id,
      pack_title: pack.title,
      price_inr: pack.price,
      price_per_serving_inr: pack.pricePerServing,
      servings: pack.servings,
      trigger_location: triggerLocation,
      variant_tested: state.currentVariant
    });
  }

  function updateCartUI() {
    const countEl = document.getElementById('header-cart-count');
    const bodyEl = document.getElementById('cart-drawer-body');
    const totalEl = document.getElementById('cart-summary-total');

    if (countEl) countEl.textContent = state.cart.length;

    if (!bodyEl) return;

    if (state.cart.length === 0) {
      bodyEl.innerHTML = '<p style="color: #64748B; text-align: center; margin-top: 2rem;">Your cart is empty.</p>';
      if (totalEl) totalEl.textContent = '₹0';
      return;
    }

    let total = 0;
    bodyEl.innerHTML = state.cart.map(function (item, idx) {
      total += item.price;
      return (
        '<div class="cart-item-card" style="margin-top: ' + (idx > 0 ? '1rem' : '0') + ';">' +
          '<img class="cart-item-img" src="' + item.image + '" alt="' + item.title + '">' +
          '<div class="cart-item-details">' +
            '<span class="cart-item-title">Korean Marine Collagen Peptides</span>' +
            '<span class="cart-item-variant">' + item.title + ' (' + item.servings + ' Servings)</span>' +
            '<span class="cart-item-price">₹' + item.price.toLocaleString('en-IN') + '</span>' +
            '<span style="font-size: 0.6875rem; color: #0D9488;">₹' + item.pricePerServing.toFixed(2) + ' / serving</span>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    if (totalEl) totalEl.textContent = '₹' + total.toLocaleString('en-IN');
  }

  function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer-overlay');
    if (drawer) {
      drawer.classList.add('active');
      drawer.setAttribute('aria-hidden', 'false');
    }
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer-overlay');
    if (drawer) {
      drawer.classList.remove('active');
      drawer.setAttribute('aria-hidden', 'true');
    }
  }

  function simulateCheckoutCompletion() {
    if (state.cart.length === 0) return;

    const total = state.cart.reduce(function (sum, item) { return sum + item.price; }, 0);
    const orderId = 'WBN-DEMO-' + Math.floor(100000 + Math.random() * 900000);

    eventLogger.track('checkout_started', {
      order_id: orderId,
      cart_size: state.cart.length,
      gross_amount_inr: total,
      checkout_gateway: 'GoKwik 1-Click (Simulation)'
    });

    closeCartDrawer();

    const toast = document.createElement('div');
    toast.className = 'modal-overlay active';
    toast.innerHTML = (
      '<div class="modal-sheet" style="padding: 2rem; text-align: center;">' +
        '<span style="font-size: 3rem;">✅</span>' +
        '<h3 style="margin-top: 0.5rem; font-size: 1.25rem; font-weight: 800; color: #0F172A;">Checkout Simulation Completed</h3>' +
        '<p style="font-size: 0.875rem; color: #475569; margin-top: 0.5rem;">' +
          'Simulated Order <strong>' + orderId + '</strong> recorded for measurement plan testing.<br>' +
          'Total: <strong>₹' + total.toLocaleString('en-IN') + '</strong>. No live financial transaction was processed.' +
        '</p>' +
        '<button type="button" class="variant-btn" style="margin-top: 1.5rem; width: 100%; padding: 0.75rem; background: #0D9488; color: #fff; font-weight: 700; border-radius: 8px;" id="btn-close-toast">' +
          'Continue Reviewing Prototype' +
        '</button>' +
      '</div>'
    );

    document.body.appendChild(toast);

    document.getElementById('btn-close-toast').addEventListener('click', function () {
      toast.remove();
    });

    // Clear cart after checkout
    state.cart = [];
    updateCartUI();

    eventLogger.track('purchase_completed', {
      order_id: orderId,
      net_revenue_inr: total,
      is_simulated: true
    });
  }

  // -------------------------------------------------------------
  // 10. FAQS ACCORDION
  // -------------------------------------------------------------
  function initFaqAccordions() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
      const questionBtn = item.querySelector('.faq-question');
      if (questionBtn) {
        questionBtn.addEventListener('click', function () {
          const isOpen = item.classList.contains('open');
          // Close others
          faqItems.forEach(function (other) {
            other.classList.remove('open');
            const btn = other.querySelector('.faq-question');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          });

          if (!isOpen) {
            item.classList.add('open');
            questionBtn.setAttribute('aria-expanded', 'true');
            eventLogger.track('faq_item_opened', {
              question: questionBtn.querySelector('span').textContent
            });
          }
        });
      }
    });
  }

  // -------------------------------------------------------------
  // 11. LOCAL EVENT LOG DEBUG DRAWER
  // -------------------------------------------------------------
  function initEventLogDrawer() {
    const btnToggle = document.getElementById('btn-toggle-event-log');
    const btnClose = document.getElementById('btn-close-event-log');
    const drawer = document.getElementById('event-log-drawer');

    if (btnToggle && drawer) {
      btnToggle.addEventListener('click', function () {
        drawer.classList.toggle('active');
      });
    }

    if (btnClose && drawer) {
      btnClose.addEventListener('click', function () {
        drawer.classList.remove('active');
      });
    }
  }

  // -------------------------------------------------------------
  // INITIALIZATION ON DOM READY
  // -------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    initExperimentMode();
    initPackSelector();
    initGallery();
    renderClinicalStudies();
    renderComparisonTable();
    initReviewExplorer();
    initProductGuide();
    initStarterPackConcept();
    initCartAndCheckout();
    initFaqAccordions();
    initEventLogDrawer();

    // Track initial page view
    eventLogger.track('product_viewed', {
      sku: window.PRODUCT_DATA.metadata.sku,
      title: window.PRODUCT_DATA.metadata.title,
      reference_price_inr: window.PRODUCT_DATA.metadata.sellingPrice,
      active_variant: state.currentVariant,
      viewport_width: window.innerWidth
    });
  });

})();
