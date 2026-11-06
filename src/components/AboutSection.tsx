import React from 'react';
import { Star, ShieldCheck, Heart, Sparkles, Target, Compass, CheckCircle2 } from 'lucide-react';
import { manikandanWhatsAppLink } from '../utils/whatsapp';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      
      {/* Top Banner with Dream Landscape Portal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E8E3FF]">
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
            <img
              src="/assets/aistudio/file_000000009b148207995035b64ea83317_e36df5f8.png"
              alt="Natchathra Finance Vision Horizon"
              className="w-full h-full object-cover object-center filter brightness-[1.02]"
            />
            {/* Soft overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#171746]/85 via-[#292078]/60 to-transparent flex items-center">
              <div className="max-w-xl p-6 sm:p-10 md:p-12 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-3 border border-white/20">
                  <Star className="w-3.5 h-3.5 text-[#F2A04B] fill-[#F2A04B]" />
                  <span>The Story Behind Our Name</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
                  ‘Natchathra’ — The Guiding Star for Your Dreams
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-[#E8E3FF] leading-relaxed">
                  In Tamil culture, a "Natchathra" represents unwavering direction and auspicious hope. We were founded to serve as that steady financial compass for hardworking families and enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Narrative & 3D Podium Split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8E3FF]/70 text-[#292078] text-xs font-semibold">
              <Compass className="w-3.5 h-3.5 text-[#7161E9]" />
              <span>Ethical Financing Since Day One</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#171746] tracking-tight leading-snug">
              Supporting Financial Needs in Mannargudi, Tamil Nadu
            </h3>

            <p className="text-sm sm:text-base text-[#171746]/75 leading-relaxed">
              At Natchathra Finance, we believe access to fair and timely credit is the single most powerful catalyst for socio-economic mobility. Whether a woman micro-entrepreneur buying sewing machines for her cooperative, a shopkeeper needing stock for festival season, or a family securing their first homestead, we stand beside our borrowers as trusted partners.
            </p>

            <p className="text-sm sm:text-base text-[#171746]/75 leading-relaxed">
              We operate with zero hidden charges, transparent amortization, and deep respect for the dignity of every client. Our relationship officers visit you in person, offering guidance in clear, friendly Tamil and English.
            </p>

            {/* Core Values 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#F8F7FF] border border-[#E8E3FF]">
                <div className="flex items-center gap-2 text-sm font-bold text-[#171746] mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#7161E9]" />
                  <span>Uncompromising Integrity</span>
                </div>
                <p className="text-xs text-[#171746]/70">
                  Every rupee accounted for with absolute clarity and upfront terms.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F7FF] border border-[#E8E3FF]">
                <div className="flex items-center gap-2 text-sm font-bold text-[#171746] mb-1">
                  <Heart className="w-4 h-4 text-[#E8A4D7]" />
                  <span>Grassroots Empowerment</span>
                </div>
                <p className="text-xs text-[#171746]/70">
                  Special focus on supporting women-led Self-Help Groups (Magalir SHG).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F7FF] border border-[#E8E3FF]">
                <div className="flex items-center gap-2 text-sm font-bold text-[#171746] mb-1">
                  <Sparkles className="w-4 h-4 text-[#52C9B0]" />
                  <span>Speed With Compassion</span>
                </div>
                <p className="text-xs text-[#171746]/70">
                  Fast 24-48h approvals backed by empathetic relationship officers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F7FF] border border-[#E8E3FF]">
                <div className="flex items-center gap-2 text-sm font-bold text-[#171746] mb-1">
                  <Target className="w-4 h-4 text-[#F2A04B]" />
                  <span>Long-term Partnerships</span>
                </div>
                <p className="text-xs text-[#171746]/70">
                  Building lifetime borrower trust with repeat loan incentives.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Botanical Podium Artwork */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md p-4">
              {/* 3D Circular Podium with Botanical Leaves and Floating Coins */}
              <div className="relative z-10 transition-transform duration-500 hover:scale-105">
                <img
                  src="/assets/aistudio/file_00000000e3a0820883ece25a719bf0af_fad97626.png"
                  alt="Natchathra Finance Golden Podium"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>

              {/* Floating Stat Card Badge */}
              <div className="absolute -bottom-4 right-2 sm:right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E8E3FF] shadow-xl z-20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#52C9B0]/20 flex items-center justify-center text-[#52C9B0] font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#171746] tabular-nums">₹50+ Crores</div>
                  <div className="text-[11px] text-[#171746]/60">Disbursed with Trust</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Leadership Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8E3FF]/70 text-[#292078] text-xs font-semibold mb-4">
            <Star className="w-3.5 h-3.5 text-[#F2A04B] fill-[#F2A04B]" />
            <span>Meet Our Leadership</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#171746] tracking-tight">The People Behind Natchathra Finance</h3>
          <p className="mt-3 text-sm sm:text-base text-[#171746]/65">A leadership team committed to transparent and dependable financial services.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <article className="overflow-hidden rounded-3xl bg-white border border-[#E8E3FF] shadow-lg shadow-[#292078]/5">
            <div className="aspect-[3/4] bg-[#E8E3FF]/40 overflow-hidden flex items-center justify-center">
              <img src="/assets/manikandan-founder.jpeg" alt="K. Manikandan, Managing Director" className="w-full h-full object-contain object-center" loading="lazy" />
            </div>
            <div className="p-6 text-center">
              <span className="inline-flex px-3 py-1 rounded-full bg-[#E8E3FF] text-[#292078] text-xs font-bold">Managing Director</span>
              <h4 className="mt-3 text-xl font-extrabold text-[#171746]">K. Manikandan</h4>
              <a href={manikandanWhatsAppLink('Hello, I would like to contact Manikandan at Natchathra Finance.')} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#7161E9] hover:text-[#292078]">70103 54426</a>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl bg-white border border-[#E8E3FF] shadow-lg shadow-[#292078]/5">
            <div className="aspect-[3/4] bg-[#E8E3FF]/40 overflow-hidden flex items-center justify-center">
              <img src="/assets/jayaseelan-founder.png" alt="A. Jayaseelan, Assistant Managing Director" className="w-full h-full object-contain object-center" loading="lazy" />
            </div>
            <div className="p-6 text-center">
              <span className="inline-flex px-3 py-1 rounded-full bg-[#E8E3FF] text-[#292078] text-xs font-bold">Assistant Managing Director</span>
              <h4 className="mt-3 text-xl font-extrabold text-[#171746]">A. Jayaseelan</h4>
              <a href={manikandanWhatsAppLink('Hello, I would like to enquire with Natchathra Finance.')} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#7161E9] hover:text-[#292078]">+91 86818 44949</a>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl bg-white border border-[#E8E3FF] shadow-lg shadow-[#292078]/5 sm:col-span-2 lg:col-span-1 sm:max-w-[calc(50%-0.75rem)] sm:justify-self-center lg:max-w-none">
            <div className="aspect-[3/4] bg-[#E8E3FF]/40 overflow-hidden flex items-center justify-center">
              <img src="/assets/vishnu-kumar-general-manager.jpeg" alt="A. Vishnu Kumar, General Manager" className="w-full h-full object-contain object-center" loading="lazy" />
            </div>
            <div className="p-6 text-center">
              <span className="inline-flex px-3 py-1 rounded-full bg-[#E8E3FF] text-[#292078] text-xs font-bold">General Manager</span>
              <h4 className="mt-3 text-xl font-extrabold text-[#171746]">A. Vishnu Kumar</h4>
              <a href={manikandanWhatsAppLink('Hello, I would like to enquire with Natchathra Finance.')} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#7161E9] hover:text-[#292078]">+91 95669 90079</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
