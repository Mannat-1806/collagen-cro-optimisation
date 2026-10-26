import React, { useState, useMemo } from 'react';
import { 
  Star, 
  ShieldCheck, 
  ThumbsUp, 
  Search, 
  X, 
  Camera, 
  Edit3, 
  ArrowRight, 
  Check, 
  Info, 
  AlertCircle,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { productData } from '../data/productData';
import { 
  VERIFIED_BENCHMARK, 
  DEV_SPEC_PLACEHOLDERS 
} from '../data/reviewsData';

export default function ReviewsSection() {
  // Session-submitted reviews (from Write a Review form)
  const [sessionReviews, setSessionReviews] = useState([]);

  // Collapsible Rating Breakdown State
  const [isBreakdownOpen, setIsBreakdownOpen] = useState(false);

  // Filter & Search States
  const [selectedRatingFilter, setSelectedRatingFilter] = useState('all'); // 'all', '5', '4', '3', '2', '1'
  const [sortOption, setSortOption] = useState('recent'); // 'recent', 'highest', 'lowest', 'helpful'
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  // Helpful click tracker per review ID
  const [helpfulVotes, setHelpfulVotes] = useState({});

  // Write a Review Modal State
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [formRating, setFormRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [formTitle, setFormTitle] = useState('');
  const [formBody, setFormBody] = useState('');
  const [formPack, setFormPack] = useState('Pack of 2 (400g - 50 Servings)');
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formRecommend, setFormRecommend] = useState('yes');
  const [formErrors, setFormErrors] = useState({});

  // Photo Lightbox Modal
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  // Active dataset combines any session-submitted reviews with sample prototype reviews
  const activeDataset = useMemo(() => {
    return [...sessionReviews, ...DEV_SPEC_PLACEHOLDERS];
  }, [sessionReviews]);

  // Filtered & Sorted Review Cards
  const filteredReviews = useMemo(() => {
    let result = [...activeDataset];

    // Filter by Rating
    if (selectedRatingFilter !== 'all') {
      result = result.filter(r => r.rating === Number(selectedRatingFilter));
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(r => 
        (r.title && r.title.toLowerCase().includes(q)) ||
        (r.body && r.body.toLowerCase().includes(q)) ||
        (r.authorName && r.authorName.toLowerCase().includes(q)) ||
        (r.packPurchased && r.packPurchased.toLowerCase().includes(q))
      );
    }

    // Sorting
    result.sort((a, b) => {
      if (sortOption === 'recent') {
        return new Date(b.date) - new Date(a.date);
      }
      if (sortOption === 'highest') {
        return b.rating - a.rating;
      }
      if (sortOption === 'lowest') {
        return a.rating - b.rating;
      }
      if (sortOption === 'helpful') {
        const aHelpful = (a.helpfulCount || 0) + (helpfulVotes[a.id] ? 1 : 0);
        const bHelpful = (b.helpfulCount || 0) + (helpfulVotes[b.id] ? 1 : 0);
        return bHelpful - aHelpful;
      }
      return 0;
    });

    return result;
  }, [activeDataset, selectedRatingFilter, searchQuery, sortOption, helpfulVotes]);

  // Paginated visible items (initial 6)
  const visibleReviews = filteredReviews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredReviews.length;

  // Handle helpful toggle
  const toggleHelpful = (reviewId) => {
    setHelpfulVotes(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  // Form Validation & Demo Submission
  const validateForm = () => {
    const errors = {};
    if (!formRating || formRating < 1 || formRating > 5) {
      errors.rating = 'Please select a star rating from 1 to 5.';
    }
    if (!formTitle.trim() || formTitle.trim().length < 4) {
      errors.title = 'Please enter a review summary (at least 4 characters).';
    }
    if (!formBody.trim() || formBody.trim().length < 30) {
      errors.body = 'Please provide details about your experience (minimum 30 characters).';
    }
    if (!formName.trim() || formName.trim().length < 2) {
      errors.name = 'Please provide your name or initials.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formEmail.trim() || !emailRegex.test(formEmail)) {
      errors.email = 'Please enter a valid email address for purchase verification.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newReview = {
      id: `session-rev-${Date.now()}`,
      authorInitials: formName.trim().split(' ').map(n => n[0]).join('. ') + '.',
      authorName: formName.trim(),
      location: 'Session Tester',
      packPurchased: formPack,
      rating: formRating,
      title: formTitle.trim(),
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      body: formBody.trim(),
      verifiedPurchase: false,
      badge: 'Submitted in Active Session',
      isSessionCreated: true,
      helpfulCount: 0,
      photoUrl: null
    };

    setSessionReviews(prev => [newReview, ...prev]);
    setIsSubmitSuccess(true);
  };

  const openWriteModal = () => {
    setFormRating(5);
    setHoverRating(0);
    setFormTitle('');
    setFormBody('');
    setFormName('');
    setFormEmail('');
    setFormErrors({});
    setIsSubmitSuccess(false);
    setIsWriteModalOpen(true);
  };

  const closeWriteModal = () => {
    setIsWriteModalOpen(false);
    setIsSubmitSuccess(false);
  };

  return (
    <section 
      id="reviews" 
      aria-labelledby="reviews-main-heading" 
      className="py-10 sm:py-14 bg-[#FAF8F5] border-b border-[#EAE3D9] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==============================================================
            1. COMPACT RATING SUMMARY & HEADER (≤ 20-25% Viewport)
        ============================================================== */}
        <div className="border-b border-[#EAE3D9] pb-5 mb-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Title & Compact Score */}
            <div>
              <div className="flex items-center gap-2 text-[11px] font-sans font-semibold uppercase tracking-wider text-[#0D9488] mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                <span>Customer Experiences</span>
              </div>
              
              <h2 
                id="reviews-main-heading" 
                className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1A1917] font-normal tracking-tight"
              >
                Real Experiences, Shared by Our Community
              </h2>

              {/* Inline Rating Details & Breakdown Trigger */}
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-sans text-[#736E65]">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-2xl font-bold text-[#1A1917] leading-none">
                    {VERIFIED_BENCHMARK.rating.toFixed(2)}
                  </span>
                  <div className="flex items-center text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3.5 h-3.5 ${i < 4 ? 'fill-[#F59E0B] text-[#F59E0B]' : 'fill-[#F59E0B]/70 text-[#F59E0B]'}`} 
                        aria-hidden="true" 
                      />
                    ))}
                  </div>
                  <span className="text-[#1A1917] font-medium ml-1">
                    ({VERIFIED_BENCHMARK.reviewCount} Verified Reviews)
                  </span>
                </div>

                <span className="text-[#D8CEBE]">·</span>

                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#736E65]">
                  Verified Aggregate Score
                </span>

                <span className="text-[#D8CEBE]">·</span>

                <button
                  type="button"
                  onClick={() => setIsBreakdownOpen(prev => !prev)}
                  className="inline-flex items-center gap-1 text-[#0D9488] hover:text-[#0b7a6f] font-medium text-xs hover:underline"
                >
                  <span>{isBreakdownOpen ? 'Hide Rating Breakdown' : 'View Rating Breakdown'}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isBreakdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Write a Review Button */}
            <div className="shrink-0 self-start sm:self-center">
              <button
                type="button"
                onClick={openWriteModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1D382B] hover:bg-[#14271E] text-white text-xs sm:text-sm font-semibold rounded-full shadow-xs transition-all focus:outline-none focus:ring-2 focus:ring-[#1D382B]"
              >
                <Edit3 className="w-4 h-4 text-[#99F6E4]" />
                <span>Write a Review</span>
              </button>
            </div>

          </div>

          {/* Optional Collapsible Horizontal Rating Distribution */}
          {isBreakdownOpen && (
            <div className="mt-4 pt-4 border-t border-[#EAE3D9] max-w-md bg-white p-4 rounded-xl border border-[#EAE3D9] shadow-2xs">
              <div className="space-y-1.5">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const stat = VERIFIED_BENCHMARK.distribution[stars];
                  const isFilterActive = selectedRatingFilter === String(stars);
                  return (
                    <button
                      key={stars}
                      type="button"
                      onClick={() => setSelectedRatingFilter(isFilterActive ? 'all' : String(stars))}
                      className={`w-full group flex items-center gap-2 text-xs font-sans p-1 rounded transition-colors text-left ${
                        isFilterActive ? 'bg-[#F0FDFA] text-[#0D9488] font-semibold ring-1 ring-[#0D9488]' : 'hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <span className="w-11 text-[#1A1917] shrink-0 flex items-center gap-1">
                        <span>{stars}</span>
                        <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                      </span>
                      <div className="flex-1 h-2 bg-[#F2EDE4] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#1D382B] group-hover:bg-[#0D9488] transition-all rounded-full"
                          style={{ width: `${stat.percent}%` }}
                        />
                      </div>
                      <span className="w-10 text-right text-[#736E65] font-mono text-[11px] shrink-0">
                        {stat.percent}%
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="mt-2.5 pt-2 border-t border-[#EAE3D9] text-[10px] text-[#736E65] font-sans">
                Click a star row to filter reviews below. Sourced from official brand customer benchmark data.
              </p>
            </div>
          )}
        </div>

        {/* ==============================================================
            2. COMPACT SEARCH & FILTER TOOLBAR
        ============================================================== */}
        <div className="bg-white border border-[#EAE3D9] rounded-xl p-3 sm:p-4 shadow-xs mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-sm">
              <Search className="w-3.5 h-3.5 text-[#736E65] absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(6);
                }}
                placeholder="Search reviews by keyword (e.g. coffee, skin, taste, scoop)..."
                className="w-full pl-8 pr-8 py-1.5 text-xs font-sans bg-[#FAF8F5] border border-[#D8CEBE] rounded-lg text-[#1A1917] placeholder-[#736E65] focus:outline-none focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#736E65] hover:text-[#1A1917]"
                  aria-label="Clear search"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Filter Pills & Sort Selector */}
            <div className="flex flex-wrap items-center gap-2">
              
              {/* Star Rating Filter Pills */}
              <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 border border-[#EAE3D9] rounded-lg">
                <button
                  type="button"
                  onClick={() => { setSelectedRatingFilter('all'); setVisibleCount(6); }}
                  className={`px-2 py-0.5 text-xs font-sans rounded font-medium transition-colors ${
                    selectedRatingFilter === 'all'
                      ? 'bg-[#1D382B] text-white shadow-2xs'
                      : 'text-[#524E47] hover:text-[#1A1917]'
                  }`}
                >
                  All
                </button>
                {[5, 4, 3, 2, 1].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => { setSelectedRatingFilter(String(star)); setVisibleCount(6); }}
                    className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 text-xs font-sans rounded font-medium transition-colors ${
                      selectedRatingFilter === String(star)
                        ? 'bg-[#1D382B] text-white shadow-2xs'
                        : 'text-[#524E47] hover:text-[#1A1917]'
                    }`}
                  >
                    <span>{star}</span>
                    <Star className={`w-2.5 h-2.5 ${selectedRatingFilter === String(star) ? 'fill-white text-white' : 'fill-[#F59E0B] text-[#F59E0B]'}`} />
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="relative shrink-0">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="appearance-none bg-[#FAF8F5] border border-[#D8CEBE] rounded-lg pl-2.5 pr-7 py-1 text-xs font-sans text-[#1A1917] font-medium focus:outline-none focus:border-[#0D9488]"
                  aria-label="Sort customer reviews"
                >
                  <option value="recent">Most Recent</option>
                  <option value="highest">Highest Rated</option>
                  <option value="lowest">Lowest Rated</option>
                  <option value="helpful">Most Helpful</option>
                </select>
                <ChevronDown className="w-3 h-3 text-[#736E65] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

            </div>

          </div>

          {/* Active Filter Indicators */}
          {(selectedRatingFilter !== 'all' || searchQuery.trim()) && (
            <div className="mt-2 pt-2 border-t border-[#EAE3D9] flex items-center justify-between text-xs font-sans text-[#524E47]">
              <div className="flex items-center gap-2">
                <span>Active:</span>
                {selectedRatingFilter !== 'all' && (
                  <span className="inline-flex items-center gap-1 bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#D8CEBE] text-[#1A1917]">
                    {selectedRatingFilter} Stars
                    <button type="button" onClick={() => setSelectedRatingFilter('all')} className="hover:text-red-600">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {searchQuery.trim() && (
                  <span className="inline-flex items-center gap-1 bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#D8CEBE] text-[#1A1917]">
                    "{searchQuery}"
                    <button type="button" onClick={() => setSearchQuery('')} className="hover:text-red-600">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => { setSelectedRatingFilter('all'); setSearchQuery(''); setVisibleCount(6); }}
                className="text-[#0D9488] hover:underline"
              >
                Reset
              </button>
            </div>
          )}
        </div>

        {/* ==============================================================
            3. TRANSPARENCY NOTICE (Live Ingestion Status & Sample Identification)
        ============================================================== */}
        <div className="mb-5 p-3 bg-white border border-[#EAE3D9] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs font-sans text-[#736E65]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 animate-pulse" />
            <span>
              <strong className="text-[#1A1917]">Live Review Stream: Integration Pending.</strong> Real Customer Reviews Will Stream Here Once Connected to live verified-order webhooks.
            </span>
          </div>
          <span className="text-[11px] font-medium text-[#0D9488] bg-[#F0FDFA] px-2.5 py-0.5 rounded-full border border-[#99F6E4] shrink-0 self-start sm:self-auto">
            Sample Reviews Below (Prototype Only)
          </span>
        </div>

        {/* ==============================================================
            4. CUSTOMER COMMENTS (MAIN FOCUS — IMMEDIATELY VISIBLE)
        ============================================================== */}
        {filteredReviews.length === 0 ? (
          <div className="p-8 bg-white border border-[#EAE3D9] rounded-xl text-center space-y-2">
            <h4 className="font-serif text-lg text-[#1A1917]">No Reviews Match Your Filter</h4>
            <p className="text-xs text-[#524E47] font-sans">
              Try choosing another star rating or resetting your search term.
            </p>
            <button
              type="button"
              onClick={() => { setSelectedRatingFilter('all'); setSearchQuery(''); setVisibleCount(6); }}
              className="mt-2 px-4 py-1.5 bg-[#1D382B] text-white rounded-lg text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* 2-Column Balanced Review List on Desktop, Stacked on Mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
              {visibleReviews.map((review) => {
                const isHelpful = !!helpfulVotes[review.id];
                const currentHelpfulCount = (review.helpfulCount || 0) + (isHelpful ? 1 : 0);

                return (
                  <article 
                    key={review.id}
                    className="p-5 sm:p-6 bg-white border border-[#EAE3D9] rounded-xl shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Header: Author, Rating, Badge */}
                      <div className="flex items-start justify-between gap-3 mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#1D382B] text-white flex items-center justify-center font-sans text-xs font-semibold shrink-0">
                            {review.authorInitials}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-sans text-xs font-bold text-[#1A1917]">
                                {review.authorName}
                              </span>
                              <span className="inline-block text-[10px] font-sans font-medium text-[#736E65] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE3D9]">
                                {review.badge || 'Sample Review — Prototype Only'}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] font-sans text-[#736E65] mt-0.5">
                              <span>{review.packPurchased}</span>
                              <span>·</span>
                              <span>{review.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Star Rating Display */}
                        <div className="flex items-center text-[#F59E0B] shrink-0" aria-label={`${review.rating} out of 5 stars`}>
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-gray-300'}`} 
                              aria-hidden="true" 
                            />
                          ))}
                        </div>
                      </div>

                      {/* Review Title */}
                      <h3 className="font-sans text-sm font-semibold text-[#1A1917] leading-snug mb-1.5">
                        {review.title}
                      </h3>

                      {/* Review Comment (50-100 words) */}
                      <p className="font-sans text-xs sm:text-[13px] text-[#524E47] leading-relaxed">
                        {review.body}
                      </p>

                      {/* Optional Photo Attachment */}
                      {review.photoUrl && (
                        <div className="mt-3 pt-2.5 border-t border-[#EAE3D9]">
                          <button
                            type="button"
                            onClick={() => setActiveLightboxImage({ url: review.photoUrl, caption: review.photoCaption })}
                            className="group flex items-center gap-2 text-left p-1 rounded-lg hover:bg-[#FAF8F5] transition-colors"
                          >
                            <div className="w-12 h-12 rounded-lg overflow-hidden border border-[#D8CEBE] bg-white relative shrink-0">
                              <img 
                                src={review.photoUrl} 
                                alt="Customer routine snapshot" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                              />
                              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                <Camera className="w-3.5 h-3.5 text-white drop-shadow" />
                              </div>
                            </div>
                            <div>
                              <span className="text-[11px] font-sans font-medium text-[#1A1917] group-hover:text-[#0D9488] flex items-center gap-1">
                                <span>View Photo</span>
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                              </span>
                              <span className="text-[10px] font-sans text-[#736E65] line-clamp-1">
                                {review.photoCaption || 'Customer routine snapshot'}
                              </span>
                            </div>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Card Footer: Date & Helpful Action */}
                    <div className="pt-3 mt-3.5 border-t border-[#EAE3D9] flex items-center justify-between text-xs font-sans">
                      <span className="text-[#736E65] text-[11px] font-mono">
                        {review.date}
                      </span>

                      <button
                        type="button"
                        onClick={() => toggleHelpful(review.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-sans transition-all ${
                          isHelpful 
                            ? 'bg-[#F0FDFA] text-[#0D9488] font-semibold border border-[#99F6E4]' 
                            : 'text-[#736E65] hover:text-[#1A1917] hover:bg-[#FAF8F5] border border-transparent'
                        }`}
                        aria-label={`Mark review as helpful. Currently ${currentHelpfulCount} helpful votes.`}
                      >
                        <ThumbsUp className={`w-3.5 h-3.5 ${isHelpful ? 'fill-[#0D9488]' : ''}`} />
                        <span>Helpful ({currentHelpfulCount})</span>
                      </button>
                    </div>

                  </article>
                );
              })}
            </div>

            {/* Load More Pagination Button */}
            {hasMore ? (
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setVisibleCount(prev => prev + 4)}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-white hover:bg-[#FAF8F5] border border-[#D8CEBE] hover:border-[#1D382B] text-xs sm:text-sm font-sans font-semibold text-[#1A1917] rounded-full shadow-2xs transition-all"
                >
                  <span>Load More Reviews</span>
                  <span className="text-xs font-mono text-[#736E65]">
                    ({filteredReviews.length - visibleCount} remaining)
                  </span>
                </button>
              </div>
            ) : (
              <p className="text-center text-xs text-[#736E65] font-sans pt-2">
                Showing all {filteredReviews.length} reviews
              </p>
            )}

          </div>
        )}

      </div>

      {/* ==============================================================
          5. WRITE A REVIEW MODAL DIALOG (Interactive Prototype Form)
      ============================================================== */}
      {isWriteModalOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="write-review-title"
          className="fixed inset-0 z-50 bg-[#1A1917]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeWriteModal}
        >
          <div 
            className="max-w-xl w-full bg-[#FAF8F5] border border-[#EAE3D9] rounded-2xl p-6 sm:p-8 shadow-2xl relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE3D9]">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-wider font-semibold text-[#0D9488]">
                  Community Feedback Flow
                </span>
                <h3 id="write-review-title" className="font-serif text-2xl text-[#1A1917] font-normal">
                  Write a Customer Review
                </h3>
              </div>
              <button
                type="button"
                onClick={closeWriteModal}
                className="p-1.5 text-[#736E65] hover:text-[#1A1917] rounded-lg transition-colors"
                aria-label="Close review dialog"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Prototype Honesty Notice */}
            <div className="my-3.5 p-3 bg-[#F0FDFA] border border-[#99F6E4] rounded-xl flex items-start gap-2.5 text-xs font-sans text-[#0F766E]">
              <Info className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-[#115E59]">Client-Side Prototype Notice:</strong> Submissions are validated locally and added to your active browser session preview. In production, this connects to verified-order webhooks (e.g. Judge.me / Yotpo) to confirm purchase authenticity.
              </div>
            </div>

            {isSubmitSuccess ? (
              <div className="py-8 flex flex-col items-center justify-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-[#F0FDFA] border border-[#99F6E4] flex items-center justify-center text-[#0D9488]">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl text-[#1A1917]">Review Submitted to Session!</h4>
                <p className="text-xs text-[#524E47] font-sans max-w-sm">
                  Your review has been successfully validated and added to the top of the reviews list in your active browser session.
                </p>
                <button
                  type="button"
                  onClick={closeWriteModal}
                  className="mt-4 px-6 py-2.5 bg-[#1D382B] text-white text-xs font-semibold rounded-full hover:bg-[#14271E] transition-all shadow-xs"
                >
                  View in Reviews List
                </button>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="mt-4 flex flex-col gap-4 text-xs font-sans">
                
                {/* 1. Star Rating Picker */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A1917] mb-1.5">
                    Overall Rating <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const isFilled = (hoverRating || formRating) >= star;
                        return (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setFormRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 hover:scale-110 transition-transform focus:outline-none"
                            aria-label={`Select ${star} out of 5 stars`}
                          >
                            <Star 
                              className={`w-6 h-6 ${isFilled ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-gray-300'}`} 
                            />
                          </button>
                        );
                      })}
                    </div>
                    <span className="text-xs font-medium text-[#736E65] ml-2">
                      {formRating === 5 && '5 - Excellent, highly recommend'}
                      {formRating === 4 && '4 - Very good product'}
                      {formRating === 3 && '3 - Neutral / acceptable'}
                      {formRating === 2 && '2 - Did not meet expectations'}
                      {formRating === 1 && '1 - Dissatisfied'}
                    </span>
                  </div>
                  {formErrors.rating && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.rating}</span>
                    </p>
                  )}
                </div>

                {/* 2. Review Headline / Title */}
                <div>
                  <label htmlFor="rev-title" className="block text-xs font-semibold text-[#1A1917] mb-1">
                    Review Title / Headline <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="rev-title"
                    type="text"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="e.g. Great mixability in morning tea, no aftertaste"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D8CEBE] rounded-xl text-[#1A1917] focus:outline-none focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488]"
                  />
                  {formErrors.title && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.title}</span>
                    </p>
                  )}
                </div>

                {/* 3. Review Body */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="rev-body" className="block text-xs font-semibold text-[#1A1917]">
                      Detailed Review (50–100 words recommended) <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] text-[#736E65] font-mono">
                      {formBody.length} chars (min 30)
                    </span>
                  </div>
                  <textarea
                    id="rev-body"
                    rows={4}
                    value={formBody}
                    onChange={(e) => setFormBody(e.target.value)}
                    placeholder="Describe how you mix the powder, taste, scoop convenience, packaging, and your daily routine..."
                    className="w-full p-3 text-xs bg-white border border-[#D8CEBE] rounded-xl text-[#1A1917] focus:outline-none focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] resize-none"
                  />
                  {formErrors.body && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.body}</span>
                    </p>
                  )}
                </div>

                {/* 4. Pack Size Purchased & Author Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="rev-pack" className="block text-xs font-semibold text-[#1A1917] mb-1">
                      Pack Variant Purchased
                    </label>
                    <select
                      id="rev-pack"
                      value={formPack}
                      onChange={(e) => setFormPack(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#D8CEBE] rounded-xl text-[#1A1917] focus:outline-none focus:border-[#0D9488]"
                    >
                      <option value="Pack of 1 (200g - 25 Servings)">Pack of 1 (200g Jar - 25 Servings)</option>
                      <option value="Pack of 2 (400g - 50 Servings)">Pack of 2 (400g Jars - 50 Servings)</option>
                      <option value="Pack of 3 (600g - 75 Servings)">Pack of 3 (600g Jars - 75 Servings)</option>
                      <option value="Pack of 4 (800g - 100 Servings)">Pack of 4 (800g Jars - 100 Servings)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="rev-name" className="block text-xs font-semibold text-[#1A1917] mb-1">
                      Your Name / Display Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="rev-name"
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-3.5 py-2 text-xs bg-white border border-[#D8CEBE] rounded-xl text-[#1A1917] focus:outline-none focus:border-[#0D9488]"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.name}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* 5. Email Address (For Order Verification) */}
                <div>
                  <label htmlFor="rev-email" className="block text-xs font-semibold text-[#1A1917] mb-1">
                    Email Address (For Verification Only) <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="rev-email"
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="name@example.com (Never displayed publicly)"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D8CEBE] rounded-xl text-[#1A1917] focus:outline-none focus:border-[#0D9488]"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.email}</span>
                    </p>
                  )}
                </div>

                {/* 6. Product Recommendation Radio */}
                <div className="pt-2">
                  <span className="block text-xs font-semibold text-[#1A1917] mb-1.5">
                    Would you recommend this product to a friend?
                  </span>
                  <div className="flex items-center gap-5">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input 
                        type="radio" 
                        name="recommend" 
                        value="yes" 
                        checked={formRecommend === 'yes'} 
                        onChange={() => setFormRecommend('yes')} 
                        className="text-[#1D382B] focus:ring-[#0D9488]"
                      />
                      <span className="text-xs text-[#1A1917]">Yes, absolutely</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input 
                        type="radio" 
                        name="recommend" 
                        value="no" 
                        checked={formRecommend === 'no'} 
                        onChange={() => setFormRecommend('no')} 
                        className="text-[#1D382B] focus:ring-[#0D9488]"
                      />
                      <span className="text-xs text-[#1A1917]">Not at this time</span>
                    </label>
                  </div>
                </div>

                {/* Modal Footer Controls */}
                <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#EAE3D9] mt-2">
                  <button
                    type="button"
                    onClick={closeWriteModal}
                    className="px-4 py-2 text-xs font-sans font-medium text-[#524E47] hover:text-[#1A1917]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1D382B] text-white text-xs font-semibold rounded-xl hover:bg-[#14271E] transition-all shadow-xs"
                  >
                    <span>Validate &amp; Add Review</span>
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>
      )}

      {/* ==============================================================
          6. PHOTO LIGHTBOX MODAL
      ============================================================== */}
      {activeLightboxImage && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#1A1917]/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveLightboxImage(null)}
        >
          <div 
            className="max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-neutral-900 aspect-square max-h-[70vh] flex items-center justify-center">
              <img 
                src={activeLightboxImage.url} 
                alt="Enlarged review attachment" 
                className="max-w-full max-h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setActiveLightboxImage(null)}
                className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
                aria-label="Close image lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {activeLightboxImage.caption && (
              <div className="p-4 bg-white border-t border-[#EAE3D9] text-xs font-sans text-[#524E47]">
                <strong className="text-[#1A1917] font-semibold">Customer Caption:</strong> {activeLightboxImage.caption}
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
