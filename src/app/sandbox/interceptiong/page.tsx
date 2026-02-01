import Link from "next/link";

const photos = [
  { id: "1", title: "Mountain", color: "#4A90D9" },
  { id: "2", title: "Ocean", color: "#2E8B57" },
  { id: "3", title: "Forest", color: "#228B22" },
  { id: "4", title: "Desert", color: "#DEB887" },
  { id: "5", title: "City", color: "#708090" },
  { id: "6", title: "Sunset", color: "#FF6347" },
];

export default function PhotoGallery() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Intercepting Routes Sample</h1>
      <p style={{ marginBottom: "20px", color: "#666" }}>
        Click a photo to open it in a modal. Refresh or navigate directly to see
        the full page.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          maxWidth: "600px",
        }}
      >
        {photos.map((photo) => (
          <Link
            key={photo.id}
            href={`/sandbox/interceptiong/photo/${photo.id}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              aspectRatio: "1",
              backgroundColor: photo.color,
              borderRadius: "8px",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "14px",
              transition: "transform 0.2s",
            }}
          >
            {photo.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
