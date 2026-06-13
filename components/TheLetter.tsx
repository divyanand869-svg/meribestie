'use client';

import { motion } from 'framer-motion';

const paragraphs = [
  `Sachhi kya likhna hai pata nahi ... Thoda random, thoda idhar-udhar aur beech beech mein unnecessary baatein bhi aa sakti hain... kyunki waise bhi hamari conversations kab seedhe topic par rehti hain?`,

  `Pata hi nahi chala kab sab normal ho gaya. Kab daily baat karna normal lagne laga. Kab tumhari notifications familiar lagne lagi. Kab arguments bhi routine ka part ban gaye. Aur honestly, mujhe sabse zyada wahi cheez surprising lagti hai.`,

  `Normally kisi ke saath itna comfortable hone mein kaafi time lagta hai. Logon ko saalon lag jaate hain. Pehle awkward phase, phir formal phase, phir woh phase jahan tum dost to ban jaate ho lekin abhi bhi thoda filter laga ke baat karte ho. Hamare yahan pata nahi woh sab skip kaise ho gaya. Hum seedha normal mode mein aa gaye.`,

  `Kaun pehle reply karega. Kiski memory better hai. Argument mein kaun jeeta. Kaun zyada sahi tha. Aise topics jahan koi trophy bhi nahi milni. Lekin tumhare dimaag mein kahin na kahin scoreboard hamesha chal raha hota hai. Aur mujhe poora yakeen hai tum usme jeetna chahti ho. Waise jeet jao, superiority complex ke saath bhi manage kar lunga 😌.`,

  `Kuch aur bhi notice kiya hai maine, pagloo... Tum jitna dikhati ho usse kaafi zyada care karti ho. Bahar se dekho to lagta hai 'mujhe kya', 'farak nahi padta', 'jo bhi hai'. Lekin phir koi choti si baat ho jaati hai aur turant pata chal jaata hai ki actually farak padta hai 🤭.`,

  `Kabhi kabhi itna argue kar liya ki original topic hi bhool gaye. Kabhi kabhi argument khatam hone ke baad bhi argument continue kar diya. Lekin funny baat ye hai ki unme se kisi bhi argument mein friendship ko kabhi kuch nahi hua. Baaki jeeta har baar main hi tha, ye alag baat hai 😌.`,

  `Ab arguments ki bhi baat karni padegi. Kyunki unke bina hamari friendship adhuri hai. Humne kuch genuinely stupid topics par itni lambi debates ki hain ki agar kisi teesre insaan ko bataun to woh sochega hum dono pagal hain.`,

  `Kabhi kabhi itna argue kar liya ki original topic hi bhool gaye. Kabhi kabhi argument khatam hone ke baad bhi argument continue kar diya. Lekin funny baat ye hai ki unme se kisi bhi argument mein mujhe kabhi friendship nhi hui baaki jeeta har baar mau hi lolllllll......`,

  `Bas thodi der ke liye irritation. Thodi der ke liye stubbornness. Thodi der ke liye dono annoying. Aur phir sab normal. Mujhe lagta hai ye kaafi rare cheez hai. Har koi itna comfortable nahi hota.`,

  `Waise official record ke liye, maximum arguments main hi jeeta tha. Source: trust me. Agar tum ye padh rahi ho aur disagree kar rahi ho, to bhi main isi statement par tikunga.`,

  `Mujhe hamari random conversations bhi bahut pasand hain. Woh wali jinka koi purpose nahi hota. Bas kisi random cheez se start hui aur pata nahi kaise ek ghante ki conversation ban gayi.`,

  `Koi important topic nahi. Koi life-changing discussion nahi. Bas baat karna. Aur mujhe lagta hai wahi reason hai ki ye friendship important lagti hai. Isse kisi occasion ki zarurat nahi padti. Koi special event nahi. Koi reason nahi. Bas exist karti hai.`,

  `Do log jo ek dusre ko irritate bhi kar sakte hain aur phir bhi saath reh sakte hain. Ye utna common nahi hai jitna log sochte hain.`,

  `Isliye timeline hai. Isliye screenshots hain. Isliye roast archive hai. Isliye achievements hain. Isliye ye sab hai. Taaki ye friendship bas yaad na rahe. Properly preserve ho.`,

  `Aur honestly, tumhari achievements ki baat karun to tumne kaafi cheezon mein achha kiya hai... Ahhem achievements ki baat horiii hai to seedha jinda Divyanand achieve kiya hai tumne 😎🤗`,

  `Aur phir bhi somehow tum normal behave karti ho jaise ye sab koi badi baat hi nahi thi. Mujhe lagta hai kabhi kabhi tum khud bhi realize nahi karti ki tumne kya achieve kiya hai 🤣👻.`,

  `Bas ek request hai. Aisi hi rehna. Thodi competitive. Thodi stubborn. Thodi annoying. Kyunki agar woh sab change ho gaya to phir maja nahi ayega`,

  `Aur hopefully future mein is website mein aur bhi memories add karni padengi. Aur bhi screenshots. Aur bhi roast files. Aur bhi arguments jisme obviously main jeetunga.`,

  `Aur jiske liye shayad maine jitna bola hai usse zyada feel kiya hai.`,

  `THANKYOU FOR BEING HERE ALWAYS.`,

  `Aur haan... kal se phir irritate karna shuru kar dunga.`,

  `— Your Professional Irritator`
];

export default function TheLetter() {
  return (
    <section className="section-shell bg-ink-900/40" id="letter">
      <div className="container-shell max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-16 text-center"
        >
          <p className="eyebrow mb-4">Read When Ready</p>
          <h2 className="heading-display text-4xl md:text-6xl text-paper-100">
            The Letter
          </h2>
        </motion.div>

        <div className="space-y-6">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={
                i === paragraphs.length - 1
                  ? 'font-display italic text-xl text-gold-light text-right pt-6'
                  : 'font-sub text-base md:text-lg leading-[1.9] text-paper-200/90'
              }
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
