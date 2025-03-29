import { FormEvent, useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";



const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeNumber, setIncludeNumber] = useState<boolean>(false);
  const [includeCharacter, setIncludeCharacter] = useState<boolean>(false);
  const [includeSymbol, setIncludeSymbol] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [coupon, setCoupon] = useState("");

  const copyText = async (coupon: string)=>{
     await  window.navigator.clipboard.writeText(coupon);
     setIsCopied(true);
  }

  const submitHandler =(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(!includeNumber && !includeCharacter && !includeSymbol){
      return alert("Please Select One At least");
    }

    let result: string = prefix || "";
    const loopLength: number = size - result.length;
    for (let i = 0; i < loopLength; i++) {
     let entireString: string = "";
     if(includeCharacter) entireString+=allLetters;
     if(includeNumber) entireString+=allNumbers;
     if(includeSymbol) entireString+=allSymbols;

      const randomNum: number = ~~(Math.random()*entireString.length)    ;
      
      result +=entireString[randomNum]
    }

    setCoupon(result)
  }

  useEffect(()=>{
    setIsCopied(false)
  }, [coupon])

  return (
    <div className="admin-container">
      {/* SideBar */}
      <AdminSidebar />
      {/* main */}
      <main className="dashboard-app-container">
        <h1>Coupon</h1>
        <section>
          <form className="coupon-form" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="text to be include"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              maxLength={size}
            />
            <input
              type="number"
              placeholder="Coupon Length"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min={8}
              max={25}
            />
            <fieldset>
              <legend>Include</legend>
              <input
                type="checkbox"
                checked={includeNumber}
                onChange={() => setIncludeNumber(prev=>!prev)}
              />
              <span>Numbers</span>
              <input
                type="checkbox"
                checked={includeCharacter}
                onChange={() => setIncludeCharacter(prev=>!prev)}
              />
              <span>Characters</span>
              <input
                type="checkbox"
                checked={includeSymbol}
                onChange={() => setIncludeSymbol(prev=>!prev)}
              />
              <span>Symbols</span>
            </fieldset>
            <button type="submit">Generate</button>
          </form>
          {coupon && <code>{coupon} <span onClick={()=> copyText(coupon)}>{isCopied?"Copied":"Copy"}</span></code>}
        </section>
      </main>
    </div>
  );
};

export default Coupon;
