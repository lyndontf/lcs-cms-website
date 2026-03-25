export default function DeviceMockup() {
  return (
    <div className="relative w-full aspect-[4/3]">
      {/* Desktop / Laptop frame */}
      <div className="absolute inset-x-0 top-0 bottom-8 flex flex-col">
        {/* Screen bezel */}
        <div className="flex-1 bg-gray-800 rounded-t-xl p-1.5 pb-0 shadow-2xl">
          {/* Browser chrome */}
          <div className="bg-gray-700 rounded-t-lg px-3 py-1.5 flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-gray-600 rounded px-2 py-0.5 text-[8px] text-gray-300 font-mono truncate">
              web.genesiscare.com.my
            </div>
          </div>
          {/* Screen content — Dashboard mockup */}
          <div className="bg-[#F1F5F9] h-full overflow-hidden">
            {/* Top nav */}
            <div className="bg-white px-3 py-1.5 flex items-center justify-between border-b border-gray-200">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded bg-[#229CD0]" />
                <span className="text-[7px] font-bold text-gray-800">Life Care Systems</span>
              </div>
              <div className="flex gap-1">
                <div className="w-4 h-4 rounded-full bg-gray-200" />
                <div className="w-4 h-4 rounded-full bg-[#229CD0]/20" />
              </div>
            </div>
            {/* Content area */}
            <div className="flex h-full">
              {/* Sidebar */}
              <div className="w-[60px] bg-white border-r border-gray-200 py-2 px-1.5 flex flex-col gap-1.5">
                {['Dashboard', 'Clients', 'Vitals', 'Roster', 'Reports'].map((item, i) => (
                  <div key={item} className={`rounded px-1 py-1 text-[5px] font-medium truncate ${i === 0 ? 'bg-[#229CD0]/10 text-[#229CD0]' : 'text-gray-500'}`}>
                    {item}
                  </div>
                ))}
              </div>
              {/* Main */}
              <div className="flex-1 p-2">
                <div className="text-[7px] font-bold text-gray-800 mb-1.5">Dashboard</div>
                {/* KPI cards */}
                <div className="grid grid-cols-4 gap-1 mb-2">
                  {[
                    { label: 'Active Clients', value: '127', color: '#229CD0' },
                    { label: 'Vitals Today', value: '89', color: '#09B7D3' },
                    { label: 'Staff On-Duty', value: '34', color: '#FAB515' },
                    { label: 'Appointments', value: '12', color: '#22C55E' },
                  ].map((card) => (
                    <div key={card.label} className="bg-white rounded p-1.5 shadow-sm">
                      <div className="text-[5px] text-gray-400 mb-0.5">{card.label}</div>
                      <div className="text-[10px] font-extrabold" style={{ color: card.color }}>{card.value}</div>
                    </div>
                  ))}
                </div>
                {/* Chart placeholder */}
                <div className="bg-white rounded p-1.5 shadow-sm mb-2">
                  <div className="text-[5px] font-bold text-gray-600 mb-1">Vitals Overview</div>
                  <div className="flex items-end gap-[2px] h-8">
                    {[40, 55, 35, 65, 50, 70, 45, 60, 75, 55, 65, 50].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: i % 2 === 0 ? '#229CD0' : '#09B7D3', opacity: 0.7 }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Laptop base */}
        <div className="h-3 bg-gray-300 rounded-b-lg mx-4 shadow-md" />
        <div className="h-1 bg-gray-400 rounded-b mx-16" />
      </div>

      {/* Mobile phone frame — overlapping bottom-right */}
      <div className="absolute -bottom-2 -right-2 sm:right-2 w-[85px] sm:w-[100px] bg-gray-800 rounded-xl p-1 shadow-2xl z-10">
        {/* Phone notch */}
        <div className="bg-gray-800 mx-auto w-8 h-1 rounded-b mb-0" />
        {/* Phone screen */}
        <div className="bg-white rounded-lg overflow-hidden">
          {/* Status bar */}
          <div className="bg-[#229CD0] px-1.5 py-0.5 flex justify-between items-center">
            <span className="text-[4px] text-white font-bold">Life Care Systems</span>
            <div className="flex gap-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>
          </div>
          {/* Mobile content */}
          <div className="bg-[#F1F5F9] p-1">
            <div className="text-[5px] font-bold text-gray-800 mb-1">My Dashboard</div>
            {/* Mobile KPI */}
            <div className="grid grid-cols-2 gap-0.5 mb-1">
              {[
                { label: 'Clients', value: '127', color: '#229CD0' },
                { label: 'Vitals', value: '89', color: '#09B7D3' },
                { label: 'Staff', value: '34', color: '#FAB515' },
                { label: 'Alerts', value: '3', color: '#EF4444' },
              ].map((card) => (
                <div key={card.label} className="bg-white rounded p-1 shadow-sm">
                  <div className="text-[4px] text-gray-400">{card.label}</div>
                  <div className="text-[7px] font-extrabold" style={{ color: card.color }}>{card.value}</div>
                </div>
              ))}
            </div>
            {/* Client list */}
            <div className="bg-white rounded p-1 shadow-sm">
              <div className="text-[4px] font-bold text-gray-600 mb-0.5">Recent Clients</div>
              {['Ahmad B.', 'Mei Ling C.', 'Ravi K.'].map((name) => (
                <div key={name} className="flex items-center gap-1 py-0.5 border-b border-gray-50 last:border-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#229CD0]/20 flex-shrink-0" />
                  <span className="text-[4px] text-gray-700">{name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Bottom nav */}
          <div className="bg-white border-t border-gray-100 flex justify-around py-0.5">
            {['🏠', '👥', '❤️', '📊', '⚙️'].map((icon, i) => (
              <span key={i} className="text-[6px]">{icon}</span>
            ))}
          </div>
        </div>
        {/* Phone home indicator */}
        <div className="mx-auto w-6 h-0.5 bg-gray-500 rounded-full mt-0.5" />
      </div>
    </div>
  );
}
