import Link from "next/link";

const photos: Record<string, { title: string; color: string }> = {
  "1": { title: "Mountain", color: "#4A90D9" },
  "2": { title: "Ocean", color: "#2E8B57" },
  "3": { title: "Forest", color: "#228B22" },
  "4": { title: "Desert", color: "#DEB887" },
  "5": { title: "City", color: "#708090" },
  "6": { title: "Sunset", color: "#FF6347" },
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PhotoPage({ params }: Props) {
  const { id } = await params;
  const photo = photos[id];

  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Link
        href="/sandbox/interceptiong"
        style={{ color: "#0070f3", marginBottom: "20px", display: "block" }}
      >
        ← Back to gallery
      </Link>
      <h1>Full Page: {photo.title}</h1>
      <p style={{ color: "#666", marginBottom: "20px" }}>
        This is the full page view. You see this when navigating directly or
        refreshing.
      </p>
      <div
        style={{
          width: "400px",
          height: "300px",
          backgroundColor: photo.color,
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {photo.title}
      </div>
      <p style={{ marginTop: "20px", color: "#333" }}>
        Photo ID: {id}
        <br />
        This page is displayed when you:
        <br />
        - Navigate directly to /sandbox/interceptiong/photo/{id}
        <br />- Refresh the page while viewing a photo
      </p>
    </div>
  );
}
