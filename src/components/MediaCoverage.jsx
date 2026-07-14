import React, { useState } from 'react';
import { FileDown, Newspaper, Camera, Mail, Phone, User, Landmark, Send, CheckCircle, Calendar, ExternalLink } from 'lucide-react';
import { submitForm } from '../utils/api';

export default function MediaCoverage({ onSubmitSuccess }) {
  const [activeSubTab, setActiveSubTab] = useState('news');
  
  const [formData, setFormData] = useState({
    name: '',
    outlet: '',
    email: '',
    phone: '',
    idNumber: '',
    coverageType: 'online',
    message: ''
  });

  const newsArticles = [
    {
      title: "Hon'ble Union Finance Minister Smt. Nirmala Sitharaman Invited as Chief Guest for Dhara Divine Awards",
      date: "24 Jan, 2025",
      image: "/images/News/Hon'ble Union Finance Minister Smt. Nirmala Sitharaman Invited as Chief Guest for Dhara Divine Awards.jpg",
      link: "https://www.youtube.com/live/qOAbFfB22uI",
      summary: "Hon'ble Union Finance Minister Smt. Nirmala Sitharaman was formally invited as a Chief Guest and dignitary to the flagship Dhara Divine Awards Ceremony, recognizing unsung grassroots heroes and NGOs for exemplary humanitarian and cultural service inspired by spiritual values."
    },
    {
      title: "Smt. Vanathi Srinivasan Graces Dhara Divine Awards Ceremony as Chief Guest",
      date: "24 Jan, 2025",
      image: "/images/News/Smt. Vanathi Srinivasan Graces Dhara Divine Awards Ceremony as Chief Guest.jpg",
      link: "https://www.youtube.com/live/qOAbFfB22uI",
      summary: "Prominent leader and MLA Smt. Vanathi Srinivasan was invited as a Chief Guest and dignitary to grace the Dhara Divine Awards Ceremony, joining Dhara Foundations to recognize dedicated grassroots champions, philanthropists, and silent social workers performing noble seva."
    },
    {
      title: "Governor of Maharashtra Appreciates DHARA Divine Awards",
      date: "31 Aug, 2025",
      image: "/images/News/Governor of Maharashtra Appreciates DHARA Divine Awards 2025.png",
      link: "https://dharafoundations.in/newsDetails/32",
      summary: "His Excellency, the Governor of Maharashtra, expressed deep appreciation for Dhara Foundations' tireless efforts in honoring unsung heroes and promoting cultural revival."
    },
    {
      title: "DHARA Divine Awards Ceremony",
      date: "24 Jan, 2025",
      image: "/images/News/DHARA Divine Awards Ceremony.jpg",
      link: "https://dharafoundations.in/newsDetails/27",
      summary: "Felicitation of 63 silent service leaders of Sanatana Dharma at the Chinmaya Heritage Centre in Chetpet, Chennai, in the presence of Madras HC Judge Justice GR Swaminathan."
    },
    {
      title: "Dhara Divine Awards News Coverage in Dinamalar",
      date: "25 Jan, 2025",
      image: "/images/Devine Awards images/News in dhina malar 3.jpg",
      link: "https://www.youtube.com/live/qOAbFfB22uI",
      summary: "Comprehensive press and print media coverage in Dinamalar highlighting the prestigious awards ceremony held at Chinmaya Heritage Centre to honor 63 grassroots leaders."
    },
    {
      title: "Felicitation Moments at Dhara Divine Awards 2025",
      date: "24 Jan, 2025",
      image: "/images/Devine Awards images/Devine Awars Moment 105.jpg",
      link: "https://www.youtube.com/live/qOAbFfB22uI",
      summary: "Relive the inspiring moments of award presentations and stage honors celebrating the grassroots champions and silent workers at the flagship Dhara Divine Awards."
    }
  ];

  const pressKits = [
    {
      title: 'Official Press Release (June 2025)',
      desc: 'Official announcement of categories, guest list, and jury details for the Divine Awards 2025.',
      fileSize: '1.2 MB',
      type: 'PDF'
    },
    {
      title: 'Brand Asset Kit & Logos',
      desc: 'Includes high-resolution vector logos, color codes, and usage guidelines for Dhara Foundations.',
      fileSize: '4.8 MB',
      type: 'ZIP'
    },
    {
      title: 'Event Schedule & Media Guidelines',
      desc: 'Detailed itinerary, routing details, and photography regulations for accredited reporters.',
      fileSize: '850 KB',
      type: 'PDF'
    },
    {
      title: 'Divine Awards 2025 Retrospective',
      desc: 'Statistics, winner profile summaries, and high-quality royalty-free images from last year.',
      fileSize: '18.4 MB',
      type: 'ZIP'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDownload = (title) => {
    alert(`Downloading press asset: ${title} (Mock Event)`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.outlet || !formData.email || !formData.idNumber) {
      alert('Please fill in all required fields.');
      return;
    }

    const submission = {
      senderName: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: `Press Pass accreditation request for ${formData.outlet}`,
      message: `ID Number: ${formData.idNumber}. Coverage Type: ${formData.coverageType}. Notes: ${formData.message || 'None'}`,
      type: 'media',
      organization: formData.outlet
    };

    submitForm('General Enquiries', submission);

    onSubmitSuccess({
      title: 'Media Accreditation Request Received',
      message: `Namaste, ${formData.name}. Your application for press credentials representing "${formData.outlet}" has been registered. Our media relations desk will evaluate your press ID (${formData.idNumber}) and verify coverage details. Approved passes will be emailed to ${formData.email}.`,
      details: [
        { label: 'Journalist', value: formData.name },
        { label: 'Publication/Outlet', value: formData.outlet },
        { label: 'Coverage Class', value: formData.coverageType.toUpperCase() }
      ]
    });
  };

  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold text-[var(--color-primary-accent)] uppercase tracking-[3px]">
          Press Room
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-deep-forest-dark)] font-serif leading-tight">
          News &amp; Media Coverage
        </h2>
        <div className="w-24 h-1 bg-[var(--color-saffron-glow)] mx-auto rounded-full"></div>
      </div>

      {/* Sub Tabs */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setActiveSubTab('news')}
          className={`px-5 py-2.5 rounded-2xl text-xs font-sans font-bold transition-all duration-300 ${
            activeSubTab === 'news'
              ? 'bg-[var(--color-deep-forest)] text-white shadow-md'
              : 'bg-white border border-[#D9CBB0]/60 text-[var(--color-deep-forest-dark)] hover:border-[var(--color-primary-accent)]'
          }`}
        >
          <Newspaper className="w-4 h-4 inline mr-2" />
          <span>Latest Press Releases</span>
        </button>
        <button
          onClick={() => setActiveSubTab('kit')}
          className={`px-5 py-2.5 rounded-2xl text-xs font-sans font-bold transition-all duration-300 ${
            activeSubTab === 'kit'
              ? 'bg-[var(--color-deep-forest)] text-white shadow-md'
              : 'bg-white border border-[#D9CBB0]/60 text-[var(--color-deep-forest-dark)] hover:border-[var(--color-primary-accent)]'
          }`}
        >
          <FileDown className="w-4 h-4 inline mr-2" />
          <span>Press Kits &amp; Passes</span>
        </button>
      </div>

      {/* News Tab Content */}
      {activeSubTab === 'news' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 animate-fade-in">
          {newsArticles.map((art, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-[#D9CBB0]/60 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div className="relative overflow-hidden bg-white shrink-0" style={{ aspectRatio: '3/4' }}>
                <img
                  src={encodeURI(art.image)}
                  alt={art.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute top-3 left-3 bg-[var(--color-deep-forest)] text-[var(--color-saffron-glow)] px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider shadow">
                  Press Release
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--color-primary-accent)] font-bold">
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-saffron-glow-dark)]" />
                    <span>{art.date}</span>
                  </div>

                  <h4 className="font-bold text-sm text-[var(--color-deep-forest-dark)] font-serif leading-snug group-hover:text-[var(--color-primary-accent)] transition-colors line-clamp-2">
                    {art.title}
                  </h4>
                  <p className="text-[11px] text-[var(--ink-soft)] leading-relaxed font-sans line-clamp-3">
                    {art.summary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Press Kit Content */}
      {activeSubTab === 'kit' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
          {/* Press Kits */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-[#D9CBB0]/60 p-6 md:p-8 space-y-6 shadow-sm">
            <h3 className="text-xl font-bold text-[var(--color-deep-forest-dark)] font-serif border-b border-neutral-100 pb-2 mb-2 flex items-center">
              <FileDown className="w-5 h-5 text-[var(--color-saffron-glow)] mr-2" />
              Download Press Kits
            </h3>
            
            <div className="space-y-4">
              {pressKits.map((kit, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl border border-neutral-100 bg-neutral-50/50 flex justify-between items-center transition-all duration-300 hover:border-[var(--color-primary-accent)] group"
                >
                  <div className="pr-4">
                    <span className="inline-block px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#F4EFE6] text-[var(--color-primary-accent)] mb-1">
                      {kit.type} • {kit.fileSize}
                    </span>
                    <h4 className="text-xs font-bold text-[var(--color-deep-forest-dark)] font-sans">{kit.title}</h4>
                    <p className="text-[10px] text-neutral-400 font-sans mt-0.5 leading-normal">{kit.desc}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDownload(kit.title)}
                    className="p-2.5 rounded-xl bg-white text-[var(--color-primary-accent)] border border-neutral-200 hover:bg-[var(--color-deep-forest)] hover:text-white hover:border-[var(--color-deep-forest)] transition-all duration-300 shadow-sm shrink-0 cursor-pointer"
                  >
                    <FileDown className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/20 border border-amber-200/50 text-[11px] font-sans text-neutral-500 leading-relaxed flex items-start space-x-2.5">
              <Camera className="w-4 h-4 text-[var(--color-saffron-glow-dark)] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[var(--color-deep-forest-dark)] block mb-0.5">Photography &amp; Video Notice</strong>
                Broadcasters and independent videographers must obtain an official filming pass. Unauthorized tripods or heavy telephoto lenses are not permitted in the inner prayer hall.
              </div>
            </div>
          </div>

          {/* Press Pass Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-[#D9CBB0]/60 p-6 md:p-8 space-y-4 shadow-sm">
            <h3 className="text-xl font-bold text-[var(--color-deep-forest-dark)] font-serif border-b border-neutral-100 pb-2 mb-2 flex items-center">
              <Newspaper className="w-5 h-5 text-[var(--color-saffron-glow)] mr-2" />
              Apply for Press Pass
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-neutral-600 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-3.5 h-3.5 text-neutral-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                    className="w-full pl-9 pr-4 py-2.5 bg-neutral-50 border border-[#D9CBB0]/40 rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-neutral-600 mb-1">Media House / Publication *</label>
                <div className="relative">
                  <Landmark className="absolute left-3.5 top-3.5 w-3.5 h-3.5 text-neutral-400" />
                  <input
                    type="text"
                    required
                    placeholder="The National Chronicle / Seva Vani"
                    value={formData.outlet}
                    onChange={(e) => setFormData(p => ({ ...p, outlet: e.target.value }))}
                    className="w-full pl-9 pr-4 py-2.5 bg-neutral-50 border border-[#D9CBB0]/40 rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-neutral-600 mb-1">Press ID Card No *</label>
                  <input
                    type="text"
                    required
                    placeholder="PIB-78901"
                    value={formData.idNumber}
                    onChange={(e) => setFormData(p => ({ ...p, idNumber: e.target.value }))}
                    className="w-full p-2.5 bg-neutral-50 border border-[#D9CBB0]/40 rounded-xl focus:outline-none uppercase"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-600 mb-1">Coverage Type</label>
                  <select
                    value={formData.coverageType}
                    onChange={(e) => setFormData(p => ({ ...p, coverageType: e.target.value }))}
                    className="w-full p-2.5 bg-neutral-50 border border-[#D9CBB0]/40 rounded-xl focus:outline-none"
                  >
                    <option value="online">Online / Digital</option>
                    <option value="print">Print Newspaper</option>
                    <option value="tv">TV Broadcaster</option>
                    <option value="photo">Photographer</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-neutral-600 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="press@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                    className="w-full p-2.5 bg-neutral-50 border border-[#D9CBB0]/40 rounded-xl focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-600 mb-1">Mobile Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                    className="w-full p-2.5 bg-neutral-50 border border-[#D9CBB0]/40 rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-neutral-600 mb-1">Special Requirements</label>
                <textarea
                  rows="2"
                  placeholder="AV pod split-feeds, stage interview slots, etc."
                  value={formData.message}
                  onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                  className="w-full p-2.5 bg-neutral-50 border border-[#D9CBB0]/40 rounded-xl focus:outline-none font-sans"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--color-saffron-glow)] to-[var(--color-saffron-glow-dark)] text-[#281006] hover:brightness-105 font-sans font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
              >
                Submit Accreditation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
