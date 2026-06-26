export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#ffffff",
        background: "#050510",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          marginBottom: "20px",
        }}
      >
        404
      </h1>

      <h2>Page Not Found</h2>

      <p>This page does not exist.</p>
    </div>
  );
}