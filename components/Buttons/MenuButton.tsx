type MenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function MenuButton({ onClick, isOpen }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`menu-btn ${isOpen ? "active" : ""} flex flex-col gap-1.25`}
    >
      <>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </>
    </button>
  );
}
