import { useState } from "react";
import Loginform from "../Forms/Loginform";
import SignUpForm from "../Forms/SignUpForm";

export const RoleComponent = ({ role, onClick }: any) => {
  return (
    <div
      id="role"
      className="flex justify-center items-center border-2 rounded-xl border-black w-48 h-48"
      style={{ fontWeight: "500", whiteSpace: "pre-line" }}
      onClick={onClick}
    >
      {role}
    </div>
  );
};

function Roles() {
  const [choiceRole, setChoiceRole] = useState("");

  const handleRole = (role: string) => {
    setChoiceRole(role);
  };

  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      {choiceRole === "" ? (
        <>
          <h2>Vous êtes :</h2>
          <RoleComponent
            role={"Professionnel"}
            onClick={() => handleRole("Professionnel")}
          />
          <RoleComponent
            role={"Apprenti(e) \n Alternant(e) \n Stagiaire"}
            onClick={() =>
              handleRole("Apprenti(e) \n Alternant(e) \n Stagiaire")
            }
          />
        </>
      ) : isRegister ? (
        <>
          <RoleComponent role={choiceRole} />
          <SignUpForm />
        </>
      ) : (
        <>
          <RoleComponent role={choiceRole} />
          <Loginform setIsRegister={setIsRegister} />
        </>
      )}
    </>
  );
}

export default Roles;
