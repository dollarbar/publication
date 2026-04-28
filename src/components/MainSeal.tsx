import RedSeal from "@/assets/Rublev_Seal_red.png"
import BlackSeal from "@/assets/Rublev_Seal_3-21-26.png"



export default function MainSeal({size = 'w-20 h-20', color='red'}: {size: string, color: string}) {


  return (
    <>
      <img
        src={color === "red" ? RedSeal : BlackSeal}
        className={size}
      />
    </>
  )
}

