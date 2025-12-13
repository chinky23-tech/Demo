

 import catImg from "../assets/cat.jpg";
 export function Cat(){
    return (
        <div className="card">
            <h2> Mr. Whiskers</h2>
            
            <img src={catImg} alt="cat" />
        </div>
    );
}
export default Cat;