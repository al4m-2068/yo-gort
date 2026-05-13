export default function Testimonials() {
  return (
    <section className="w-full min-h-screen bg-[#F7F6E5] overflow-hidden relative pt-[72px] pb-[72px] px-6">

      {/* blur bg */}
      <div className="absolute w-[220px] h-[220px] bg-[rgba(118,210,219,0.12)] blur-[90px] rounded-full top-[180px] left-[-100px]" />
      <div className="absolute w-[180px] h-[180px] bg-[rgba(218,72,72,0.08)] blur-[90px] rounded-full bottom-[100px] right-[-80px]" />

      <div className="w-full relative z-[2]">

        {/* heading */}
        <div className="text-center mb-14">
          <h2 className="text-[38px] leading-[1.05] tracking-[-2px] font-extrabold font-brigro text-navo min-[391px]:text-[44px]">
            Real Spoons,
            <br />
            <span className="text-redo font-brigro">Real Joy</span>
          </h2>
        </div>

        {/* card 1 */}
        <div className="w-full bg-white rounded-[34px] pt-[26px] pb-[26px] px-[22px] mb-7 -rotate-3 relative shadow-[0_12px_30px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.8)] max-[390px]:rounded-[30px] max-[390px]:px-5 max-[390px]:py-[22px]">

          <div className="text-[#DA4848] font-nuni text-[18px] tracking-[2px] mb-4">
            ★★★★★
          </div>

          <p className="text-[16px] min-[391px]:text-[14px] italic font-nuni leading-[1.9] text-navo font-medium mb-[26px]">
            “Honestly the creamiest yogurt I've ever had. My kids are obsessed with the Strawberry flavor!”
          </p>

          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-aquo shrink-0" />

            <span className="text-[12px] font-nuni font-semibold tracking-[0.2px]">
              @creamyLove_99
            </span>
          </div>
        </div>

        {/* card 2 */}
        <div className="w-full bg-white rounded-[34px] pt-[26px] pb-[26px] px-[22px] rotate-3 relative shadow-[0_12px_30px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.8)] max-[390px]:rounded-[30px] max-[390px]:px-5 max-[390px]:py-[22px]">

          <div className="text-redo font-nuni text-[18px] tracking-[2px] mb-4">
            ★★★★★
          </div>

          <p className="text-[16px] min-[391px]:text-[14px] italic font-nuni leading-[1.9] text-navo font-medium mb-[26px]">
            “Perfect post-workout snack. The Honey one is elite level. No sugar crash either!”
          </p>

          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-redo shrink-0" />

            <span className="text-[12px] font-nuni font-semibold tracking-[0.2px]">
              MARK R.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}