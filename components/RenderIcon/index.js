import { DiReact ,DiJavascript1} from "react-icons/di"; 
import { AiFillHtml5 } from "react-icons/ai";
import { SiNodedotjs,SiFirebase,SiStrapi,SiMongodb,SiNextdotjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const index = (Icon) => {
    if(Icon.match(/react/ig))
        return <div><DiReact style={{fontSize:"5rem"}} /></div>
    else if(Icon.match(/next/ig))
        return <div><SiNextdotjs /></div>
    else if(Icon.match(/js/ig) || Icon.match(/javascript/ig))
        return <div><DiJavascript1 /></div>
    else if(Icon.match(/node/ig))
        return <div><SiNodedotjs /></div>
    else if(Icon.match(/html/ig))
        return <div><AiFillHtml5 /></div>
    else if(Icon.match(/mongo/ig))
        return <div><SiMongodb /></div>
    else if(Icon.match(/strapi/ig))
        return <div><SiStrapi /></div>
    else if(Icon.match(/firebase/ig))
        return <div><SiFirebase /></div>
    else if(Icon.match(/mysql/ig))
        return <div><GrMysql /></div>
}

export default index