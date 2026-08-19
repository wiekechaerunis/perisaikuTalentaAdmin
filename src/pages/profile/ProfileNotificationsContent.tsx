import { useState } from "react";
import { useOutletContext } from "react-router";
import { Check } from "lucide-react";
import { ProfileSharedState } from "../../mocks/profile";

export function ProfileNotificationsContent() {
  const { pushToast } = useOutletContext<ProfileSharedState>();
  const defaultChannels = { inApp: true, email: true };
  const defaultTypes = { lamaranBaru: true, kandidatMatching: true, interviewTerjadwal: true, undanganDiterima: true, subscriptionReminder: true };
  const [channels, setChannels] = useState(defaultChannels);
  const [types, setTypes] = useState(defaultTypes);
  const [savedChannels, setSavedChannels] = useState(defaultChannels);
  const [savedTypes, setSavedTypes] = useState(defaultTypes);
  const hasChanges = JSON.stringify(channels) !== JSON.stringify(savedChannels) || JSON.stringify(types) !== JSON.stringify(savedTypes);
  const notificationRows: { key: keyof typeof types; label: string; description: string }[] = [
    { key: "lamaranBaru", label: "Lamaran baru", description: "Saat ada kandidat baru melamar ke lowonganmu" },
    { key: "kandidatMatching", label: "Kandidat matching", description: "Saat ada kandidat yang cocok dengan kriteria lowonganmu" },
    { key: "interviewTerjadwal", label: "Interview terjadwal", description: "Saat jadwal interview dikonfirmasi atau diubah" },
    { key: "undanganDiterima", label: "Undangan diterima", description: "Saat kandidat yang diundang menerima/approve undanganmu" },
    { key: "subscriptionReminder", label: "Subscription reminder", description: "Saat masa berlangganan akan berakhir" },
  ];
  const save = () => {
    setSavedChannels(channels);
    setSavedTypes(types);
    pushToast("Preferensi notifikasi berhasil disimpan");
  };
  const channelCheckbox = (key: keyof typeof channels, label: string) => (
    <button onClick={() => setChannels(prev => ({ ...prev, [key]: !prev[key] }))} className="flex items-center gap-3 text-left">
      <span className={`flex size-5 items-center justify-center rounded-[5px] border ${channels[key] ? "border-brand-primary bg-brand-primary text-white" : "border-border-default bg-white"}`}>{channels[key] && <Check size={13} strokeWidth={3} />}</span>
      <span className="text-[14px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{label}</span>
    </button>
  );

  return (
    <div className="w-full rounded-2xl border border-border-lighter bg-white px-8 py-7 shadow-[0_4px_6px_rgba(0,0,0,0.02)]">
      <section className="border-b border-border-lighter pb-7">
        <h2 className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Kirim notifikasi via</h2>
        <div className="mt-5 flex items-center gap-12">
          {channelCheckbox("inApp", "In-app Notification")}
          {channelCheckbox("email", "Email")}
        </div>
      </section>

      <section className="pt-7">
        <h2 className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Jenis notifikasi</h2>
        <div className="mt-5 divide-y divide-[#e6e6e7]">
          {notificationRows.map(row => (
            <div key={row.key} className="flex min-h-[76px] items-center justify-between gap-6 py-4">
              <div>
                <p className="text-[14px] font-semibold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{row.label}</p>
                <p className="mt-1 text-[13px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>{row.description}</p>
              </div>
              <button onClick={() => setTypes(prev => ({ ...prev, [row.key]: !prev[row.key] }))} role="switch" aria-checked={types[row.key]} className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${types[row.key] ? "bg-brand-primary" : "bg-border-default"}`}>
                <span className={`absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow-sm transition-transform ${types[row.key] ? "translate-x-5" : "translate-x-0"}`} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-end pt-7">
        <button disabled={!hasChanges} onClick={save} className="h-11 rounded-full bg-brand-primary px-6 text-[14px] font-bold text-white transition-colors hover:bg-brand-primary-hover disabled:cursor-not-allowed disabled:bg-[#f1eff0] disabled:text-border-default" style={{ fontFamily: "var(--font-body)" }}>Simpan</button>
      </div>
    </div>
  );
}

