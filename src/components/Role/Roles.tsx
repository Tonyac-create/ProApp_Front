import { useState } from "react";
import Loginform from "../Forms/Loginform";
import SignUpForm from "../Forms/SignUpForm";
import { RoleComponent } from "./RoleComponent";

function Roles() {
  const [choiceRole, setChoiceRole] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  const handleRole = (role: string) => {
    setChoiceRole(role);
  };

  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      {choiceRole === "" ? (
        <>
          <h2 className="text-2xl font-bold">Vous êtes :</h2>
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
          <SignUpForm
            showPassword={showPassword}
            setShowPassword={setShowPassword} />
        </>
      ) : (
        <>
          <RoleComponent role={choiceRole} />
          <Loginform
            setIsRegister={setIsRegister}
            showPassword={showPassword}
            setShowPassword={setShowPassword} />
        </>
      )}
    </>
  );
}

export default Roles;
