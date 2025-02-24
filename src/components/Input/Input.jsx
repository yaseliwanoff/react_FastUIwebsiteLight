export default function Input({ inputName, inputPlaceholder, inputType, area }) {
  return (
    <>
      {area === true ? (
        <div className="flex flex-col gap-1">
          <label htmlFor={inputName} className="text-[18px] font-bold">{inputName}</label>
          <textarea className="input__style" id={inputName} placeholder={inputPlaceholder}></textarea>
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <label htmlFor={inputName} className="text-[18px] font-bold">{inputName}</label>
          <input className="input__style" id={inputName} type={inputType} placeholder={inputPlaceholder} />
        </div>
      )}
    </>
  )
}