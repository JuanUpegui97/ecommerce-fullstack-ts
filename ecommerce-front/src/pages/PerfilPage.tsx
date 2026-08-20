import type React from "react";
import { useAuth } from "../context/AuthContext";



const PerfilPage: React.FC = () => {

    const {user} = useAuth();

    return(

    <div>
        <h1>Hola {user?.username} </h1>
    </div>


    );
};

export default PerfilPage;