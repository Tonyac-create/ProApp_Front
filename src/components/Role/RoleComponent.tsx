
export const RoleComponent = ({ role, onClick }: any) => {
    return (
      <div
        id="role"
        className="flex justify-center items-center border-2 rounded-xl border-black w-48 h-48 cursor-pointer hoverStyle"
        style={{ fontWeight: "500", whiteSpace: "pre-line" }}
        onClick={onClick}
      >
        {role}
      </div>
    );
  };