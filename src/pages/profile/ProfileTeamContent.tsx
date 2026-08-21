import { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router";
import { Plus, X, Send, Trash2 } from "lucide-react";
import Lottie from "lottie-react";
import emailInvitationSuccessLottie from "../../assets/lottie/email-invitation-success.json";
import { ProfileSharedState, TEAM_MEMBERS } from "../../mocks/profile";

function LockIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M4.66667 7.33324V4.66636C4.66667 3.78224 5.01786 2.93432 5.64298 2.30915C6.2681 1.68398 7.11595 1.33276 8 1.33276C8.88406 1.33276 9.7319 1.68398 10.357 2.30915C10.9821 2.93432 11.3333 3.78224 11.3333 4.66636V7.33324M3.33333 7.33324H12.6667C13.403 7.33324 14 7.93025 14 8.66668V13.3337C14 14.0702 13.403 14.6672 12.6667 14.6672H3.33333C2.59695 14.6672 2 14.0702 2 13.3337V8.66668C2 7.93025 2.59695 7.33324 3.33333 7.33324Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ProfileTeamContent() {
  const navigate = useNavigate();
  const { pushToast, setHeaderActions, activeTier } = useOutletContext<ProfileSharedState>();
  const [members, setMembers] = useState(TEAM_MEMBERS);
  const adminQuota = activeTier.kuotaAdmin;
  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteSuccessOpen, setInviteSuccessOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [pendingStatusChange, setPendingStatusChange] = useState<{ id: string; name: string; activate: boolean } | null>(null);
  const [pendingDelete, setPendingDelete] = useState<{ id: string; name: string } | null>(null);
  const activeAdmins = members.filter(member => member.status === "AKTIF").length;
  const invite = () => {
    if (!inviteEmail.trim()) return;
    const name = inviteEmail.split("@")[0].split(/[._-]/).map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
    setMembers(prev => [...prev, { id: `TM${Date.now()}`, name: name || "Anggota Baru", email: inviteEmail.trim(), role: "MULTI-ADMIN", status: "INVITED", joined: "—", locked: false }]);
    setInviteEmail("");
    setInviteOpen(false);
    setInviteSuccessOpen(true);
  };

  useEffect(() => {
    setHeaderActions(
      <button onClick={() => setInviteOpen(true)} disabled={activeAdmins >= adminQuota} className="flex h-11 items-center gap-2 rounded-full bg-brand-primary px-5 text-[14px] font-bold text-white hover:bg-brand-primary-hover disabled:opacity-40" style={{ fontFamily: "var(--font-body)" }}><Plus size={17} />Undang Anggota</button>
    );
    return () => setHeaderActions(null);
  }, [activeAdmins, adminQuota]);

  return (
    <div className="flex flex-col gap-6">

      <div className="flex items-center justify-between gap-6 rounded-2xl border border-[#dce4f0] bg-white px-6 py-5">
        <div className="w-full max-w-[380px]"><p className="text-[14px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{activeAdmins} dari {adminQuota} admin terpakai</p><div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e2e8f0]"><div className="h-full rounded-full bg-brand-primary transition-all" style={{ width: `${(activeAdmins / adminQuota) * 100}%` }} /></div><p className="mt-3 text-[13px] text-text-lighter">Upgrade paket untuk menambah anggota tim.</p></div>
        <button onClick={() => navigate("/profile/billing/plans")} className="h-10 rounded-full border-[1.5px] border-brand-primary px-5 text-[13px] font-bold text-brand-primary hover:bg-[#eef3ff]">Lihat Paket Berlangganan</button>
      </div>

      <div className="overflow-visible rounded-2xl border border-[#dce4f0] bg-white">
        <div className="grid grid-cols-[1.45fr_1.35fr_.85fr_.65fr_1fr_132px] gap-4 rounded-t-2xl border-b border-[#dce4f0] bg-[#f4f5f7] px-6 py-3 text-[11px] font-bold text-text-darker"><span>NAMA ANGGOTA</span><span>EMAIL</span><span>ROLE</span><span>STATUS</span><span>TANGGAL BERGABUNG</span><span className="text-center">AKSI</span></div>
        {members.map((member, index) => (
          <div key={member.id} className={`grid min-h-[72px] grid-cols-[1.45fr_1.35fr_.85fr_.65fr_1fr_132px] items-center gap-4 px-6 py-3 ${index < members.length - 1 ? "border-b border-[#dce4f0]" : ""} ${member.status === "INVITED" ? "text-[#9ca3af]" : ""}`}>
            <div className="flex min-w-0 items-center gap-3"><div className={`flex size-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${member.status === "INVITED" ? "bg-text-subtle opacity-60" : "bg-[#334155]"}`}>{member.name.split(" ").map(n => n[0]).slice(0,2).join("")}</div><div className="min-w-0"><p className="truncate text-[13px] font-bold text-text-default">{member.name}</p>{member.status === "INVITED" && <p className="text-[10px] text-[#f59e0b]">Menunggu konfirmasi</p>}</div></div>
            <span className="truncate text-[13px] text-text-muted">{member.email}</span>
            <span className={`w-fit rounded-md px-2 py-1 text-[10px] font-bold ${member.role === "SUPER ADMIN" ? "bg-[#fff1eb] text-[#ff6b35]" : "bg-[#eaf1ff] text-brand-primary"}`}>{member.role}</span>
            <div>{member.status === "INVITED" ? <span className="text-[10px] font-bold text-[#f59e0b]">INVITED</span> : <button disabled={member.locked} onClick={() => setPendingStatusChange({ id: member.id, name: member.name, activate: member.status !== "AKTIF" })} role="switch" aria-checked={member.status === "AKTIF"} aria-label={`${member.status === "AKTIF" ? "Nonaktifkan" : "Aktifkan"} ${member.name}`} className={`relative h-6 w-11 rounded-full transition-colors ${member.status === "AKTIF" ? "bg-brand-primary" : "bg-border-default"} ${member.locked ? "cursor-not-allowed opacity-45" : ""}`}><span className={`absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow-sm transition-transform ${member.status === "AKTIF" ? "translate-x-5" : "translate-x-0"}`} /></button>}</div>
            <span className="text-[13px] text-text-muted">{member.joined}</span>
            <div className="flex items-center justify-center gap-2">
              {member.locked ? (
                <LockIcon className="text-text-subtle" />
              ) : member.status === "INVITED" ? (
                <>
                  <button disabled aria-label="Kirim Ulang Undangan" className="rounded-lg p-2 text-border-default cursor-not-allowed"><Send size={17} /></button>
                  <button disabled aria-label="Hapus" className="rounded-lg p-2 text-border-default cursor-not-allowed"><Trash2 size={17} /></button>
                </>
              ) : (
                <>
                  <div className="group relative">
                    <button aria-label="Kirim Ulang Undangan" onClick={() => setInviteSuccessOpen(true)} className="rounded-lg p-2 text-[#697386] transition-colors hover:bg-[#f3f4f6] hover:text-[#3b4252]"><Send size={17} /></button>
                    <span role="tooltip" className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#252b3a] px-2.5 py-1.5 text-[11px] font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">Kirim Ulang Undangan</span>
                  </div>
                  <div className="group relative">
                    <button aria-label="Hapus" onClick={() => setPendingDelete({ id: member.id, name: member.name })} className="rounded-lg p-2 text-[#dc3b2f] transition-colors hover:bg-[#fef2f2] hover:text-[#c92d23]"><Trash2 size={17} /></button>
                    <span role="tooltip" className="pointer-events-none absolute bottom-full right-0 z-30 mb-2 whitespace-nowrap rounded-md bg-[#252b3a] px-2.5 py-1.5 text-[11px] font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">Hapus</span>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {inviteOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]/35 p-6" onMouseDown={() => setInviteOpen(false)}><div className="w-full max-w-[560px] rounded-[24px] bg-white p-8 shadow-2xl" onMouseDown={event => event.stopPropagation()}><div className="flex items-center justify-between"><h2 className="text-[24px] font-bold text-text-darker">Undang Anggota Tim</h2><button aria-label="Tutup" onClick={() => setInviteOpen(false)} className="flex size-10 items-center justify-center rounded-full bg-[#f3f4f6] text-icon-default"><X size={22} /></button></div><label className="mt-10 block text-[16px] font-bold text-[#536176]">Alamat Email</label><input autoFocus type="email" value={inviteEmail} onChange={event => setInviteEmail(event.target.value)} onKeyDown={event => { if (event.key === "Enter" && inviteEmail.trim()) invite(); }} placeholder="nama@perusahaan.com" className="mt-2 h-[56px] w-full rounded-2xl border border-[#d7dee9] px-4 text-[16px] text-text-darker outline-none placeholder:text-[#9aabc5] focus:border-brand-primary" /><p className="mt-6 text-[15px] text-[#536176]">Undangan berlaku selama 7 hari</p><div className="mt-10 flex justify-end gap-4"><button onClick={() => setInviteOpen(false)} className="h-12 rounded-full border-[1.5px] border-border-default px-7 text-[15px] font-bold text-text-darker">Batal</button><button disabled={!inviteEmail.trim()} onClick={invite} className="h-12 rounded-full bg-brand-primary px-7 text-[15px] font-bold text-white hover:bg-brand-primary-hover disabled:opacity-40">Kirim Undangan</button></div></div></div>}

      {inviteSuccessOpen && <div className="fixed inset-0 z-[105] flex items-center justify-center bg-[#0f172a]/35 p-6"><div className="w-full max-w-[560px] rounded-[24px] bg-white p-8 text-center shadow-2xl"><div className="mx-auto h-[145px] w-[145px]"><Lottie animationData={emailInvitationSuccessLottie} loop={false} autoplay /></div><h2 className="mt-1 text-[24px] font-bold text-text-darker">Undangan Berhasil Dikirim</h2><p className="mx-auto mt-2 max-w-[460px] text-[16px] leading-6 text-text-darker">Undangan telah dikirim ke alamat email yang ditentukan.<br />Undangan berlaku selama 7 hari.</p><button onClick={() => { setInviteSuccessOpen(false); pushToast("Undangan anggota berhasil dikirim"); }} className="mt-8 h-12 w-full rounded-full bg-brand-primary text-[15px] font-bold text-white hover:bg-brand-primary-hover">Tutup</button></div></div>}

      {pendingDelete && <div className="fixed inset-0 z-[110] flex items-center justify-center bg-[#0f172a]/35 p-6" onMouseDown={() => setPendingDelete(null)}><div className="relative w-full max-w-[600px] rounded-[24px] bg-white p-8 shadow-2xl" onMouseDown={event => event.stopPropagation()}><button aria-label="Tutup" onClick={() => setPendingDelete(null)} className="absolute right-6 top-6 flex size-10 items-center justify-center rounded-full bg-[#f3f4f6] text-icon-default"><X size={22} /></button><h2 className="pr-14 text-[24px] font-bold text-text-darker">Hapus {pendingDelete.name}?</h2><p className="mt-8 text-[16px] leading-7 text-text-darker">Apakah kamu yakin ingin menghapus <span className="font-bold">{pendingDelete.name}?</span></p><p className="mt-7 text-[16px] leading-7 text-text-darker">Tindakan ini tidak bisa dibatalkan. {pendingDelete.name} akan kehilangan akses ke Perisaiku Talenta sepenuhnya.</p><div className="mt-10 flex justify-end gap-4"><button onClick={() => setPendingDelete(null)} className="h-12 rounded-full border-[1.5px] border-border-default px-8 text-[15px] font-bold text-text-darker">Batal</button><button onClick={() => { const deleted = pendingDelete; setMembers(prev => prev.filter(item => item.id !== deleted.id)); setPendingDelete(null); pushToast(`${deleted.name} berhasil dihapus dari tim`); }} className="h-12 rounded-full bg-[#ff3826] px-8 text-[15px] font-bold text-white hover:bg-[#dc2626]">Hapus</button></div></div></div>}

      {pendingStatusChange && <div className="fixed inset-0 z-[110] flex items-center justify-center bg-[#0f172a]/35 p-6" onMouseDown={() => setPendingStatusChange(null)}><div className="relative w-full max-w-[520px] rounded-3xl bg-white p-8 shadow-2xl" onMouseDown={event => event.stopPropagation()}><button onClick={() => setPendingStatusChange(null)} className="absolute right-6 top-6 flex size-9 items-center justify-center rounded-full bg-[#f3f4f6] text-icon-default"><X size={20} /></button><h2 className="pr-12 text-[24px] font-bold text-text-darker">{pendingStatusChange.activate ? `Aktifkan ${pendingStatusChange.name}?` : `Nonaktifkan ${pendingStatusChange.name}?`}</h2><p className="mt-7 text-[16px] leading-7 text-text-darker"><span className="font-bold">{pendingStatusChange.name}</span>{pendingStatusChange.activate ? " akan dapat mengakses kembali Perisaiku Talenta." : " tidak akan bisa mengakses Perisaiku Talenta sampai diaktifkan kembali."}</p><div className="mt-12 flex justify-end gap-4"><button onClick={() => setPendingStatusChange(null)} className="h-12 rounded-full border-[1.5px] border-border-default px-7 text-[15px] font-bold text-text-darker">Batal</button><button onClick={() => { const change = pendingStatusChange; setMembers(prev => prev.map(member => member.id === change.id ? { ...member, status: change.activate ? "AKTIF" : "NONAKTIF" } : member)); setPendingStatusChange(null); pushToast(change.activate ? `${change.name} berhasil diaktifkan` : `${change.name} berhasil dinonaktifkan`); }} className={`h-12 rounded-full px-7 text-[15px] font-bold text-white ${pendingStatusChange.activate ? "bg-brand-primary hover:bg-brand-primary-hover" : "bg-[#ff3826] hover:bg-[#dc2626]"}`}>{pendingStatusChange.activate ? "Aktifkan" : "Nonaktifkan"}</button></div></div></div>}
    </div>
  );
}
