

 import catImg from "./assets/cat.jpg";
function Cat(){
    return (
        <div className="card">
            <h2>Mr. Whiskers</h2>
            <img src={catImg} alt="cat" />
        </div>
    );
}
export default Cat;