import Modal from "../../../_components/Modal";

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

export default async function PhotoModal({ params }: Props) {
  const { id } = await params;
  const photo = photos[id];

  if (!photo) {
    return null;
  }

  return (
    <Modal>
      <h2 style={{ marginBottom: "16px" }}>Modal: {photo.title}</h2>
      <div
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: photo.color,
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {photo.title}
      </div>
      <p style={{ marginTop: "16px", color: "#666", fontSize: "14px" }}>
        This is shown in a modal via intercepting routes.
        <br />
        Press ESC or click outside to close.
      </p>
    </Modal>
  );
}
