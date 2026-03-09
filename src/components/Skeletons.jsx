/* ─────────────────────────────────────────────
   Skeleton shimmer components
   Usage:
     <JobCardSkeleton />          — job listing card
     <StatCardSkeleton />         — dashboard stat
     <CandidateCardSkeleton />    — candidate card
     <SkeletonJobPage />          — full jobs page skeleton
     <SkeletonDashboard />        — full dashboard skeleton
───────────────────────────────────────────── */

const Bone = ({ w = "100%", h = "14px", r = "6px", style = {} }) => (
  <div className="skeleton-bone" style={{ width: w, height: h, borderRadius: r, ...style }} />
);

/* Single job card skeleton */
export const JobCardSkeleton = () => (
  <div className="job-card" style={{ marginBottom: "14px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
      <div style={{ flex: 1 }}>
        <Bone w="55%" h="18px" r="6px" style={{ marginBottom: "8px" }} />
        <Bone w="35%" h="13px" />
      </div>
      <Bone w="90px" h="36px" r="9px" />
    </div>
    <div style={{ display: "flex", gap: "20px", marginBottom: "14px" }}>
      <Bone w="100px" h="12px" />
      <Bone w="80px" h="12px" />
      <Bone w="110px" h="12px" />
    </div>
    <Bone w="100%" h="13px" style={{ marginBottom: "6px" }} />
    <Bone w="80%" h="13px" style={{ marginBottom: "14px" }} />
    <div style={{ display: "flex", gap: "8px" }}>
      <Bone w="64px" h="24px" r="999px" />
      <Bone w="72px" h="24px" r="999px" />
      <Bone w="56px" h="24px" r="999px" />
    </div>
  </div>
);

/* Dashboard stat card skeleton */
export const StatCardSkeleton = () => (
  <div className="stat-card">
    <div>
      <Bone w="80px" h="11px" style={{ marginBottom: "10px" }} />
      <Bone w="60px" h="30px" r="6px" />
    </div>
    <Bone w="48px" h="48px" r="12px" />
  </div>
);

/* Candidate card skeleton */
export const CandidateCardSkeleton = () => (
  <div className="candidate-card" style={{ marginBottom: "12px" }}>
    <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
      <Bone w="40px" h="40px" r="50%" style={{ flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        <Bone w="60%" h="13px" style={{ marginBottom: "6px" }} />
        <Bone w="80%" h="11px" style={{ marginBottom: "4px" }} />
        <Bone w="50%" h="11px" />
      </div>
      <Bone w="44px" h="24px" r="999px" style={{ flexShrink: 0 }} />
    </div>
    <Bone w="70px" h="20px" r="999px" style={{ marginBottom: "10px" }} />
    <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
      <Bone w="52px" h="20px" r="999px" />
      <Bone w="64px" h="20px" r="999px" />
      <Bone w="48px" h="20px" r="999px" />
    </div>
    <Bone w="100%" h="32px" r="8px" />
  </div>
);

/* Full jobs page skeleton */
export const SkeletonJobPage = () => (
  <div className="jobs-page">
    {/* Header */}
    <div style={{ marginBottom: "32px" }}>
      <Bone w="300px" h="36px" r="8px" style={{ marginBottom: "12px" }} />
      <Bone w="220px" h="16px" />
    </div>
    {/* Search panel */}
    <div className="search-panel" style={{ marginBottom: "32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: "12px" }}>
        <Bone h="44px" r="10px" />
        <Bone h="44px" r="10px" />
        <Bone w="130px" h="44px" r="10px" />
      </div>
    </div>
    {/* Cards */}
    {[1, 2, 3].map(i => <JobCardSkeleton key={i} />)}
  </div>
);

/* Full dashboard skeleton */
export const SkeletonDashboard = () => (
  <div className="dashboard-page">
    {/* Header */}
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "32px" }}>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <Bone w="56px" h="56px" r="16px" style={{ flexShrink: 0 }} />
        <div>
          <Bone w="200px" h="22px" style={{ marginBottom: "8px" }} />
          <Bone w="150px" h="14px" />
        </div>
      </div>
      <Bone w="130px" h="44px" r="10px" />
    </div>
    {/* Stats */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px", marginBottom: "32px" }}>
      {[1,2,3,4].map(i => <StatCardSkeleton key={i} />)}
    </div>
    {/* Main grid */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "24px" }}>
      <div style={{ background: "var(--surface)", borderRadius: "var(--radius-xl)", padding: "32px", border: "1px solid var(--border)" }}>
        <Bone w="200px" h="20px" style={{ marginBottom: "16px" }} />
        <Bone w="100%" h="160px" r="12px" />
      </div>
      <div>
        <Bone w="100%" h="320px" r="18px" />
      </div>
    </div>
  </div>
);

export default JobCardSkeleton;