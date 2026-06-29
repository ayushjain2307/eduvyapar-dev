import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useTheme } from '../hooks/useTheme'
import {
  IconSchool as TablerIconSchool, IconShieldCheck, IconHeart, IconBackpack, IconUserPlus,
  IconUser, IconLock, IconEye, IconEyeOff, IconPhone, IconCalendar,
  IconIdBadge, IconArrowRight, IconSend, IconLogin, IconArrowLeft,
  IconKey, IconAlertCircle, IconMoon, IconSun,
  IconBrandWhatsapp, IconBrandLinkedin, IconBrandFacebook,
} from '@tabler/icons-react'

type Portal = 'admin' | 'parent' | 'student' | 'preadmit' | 'forgot'

export default function SignIn() {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()
  const [portal, setPortal] = useState<Portal>('admin')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState(false)

  const doLogin = () => {
    if (!username || !password) { setError(true); return }
    navigate({ to: '/dashboard' })
  }

  const portalPills: { key: Portal; label: string }[] = [
    { key: 'admin', label: 'Admin / Staff' },
    { key: 'parent', label: 'Parent' },
    { key: 'student', label: 'Student' },
    { key: 'preadmit', label: 'Pre-admission' },
  ]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: 'var(--bg-tertiary)' }}>
      <div style={{ display: 'flex', width: '100%', maxWidth: 900, minHeight: 580, background: 'var(--bg-primary)', borderRadius: 'var(--r12)', overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,0,0,.08)' }}>

        {/* LEFT */}
        <div style={{ width: '42%', background: 'var(--te-700)', display: 'flex', flexDirection: 'column', padding: '32px 36px', position: 'relative', overflow: 'hidden' }}>
          {/* circles */}
          <div style={{ position: 'absolute', width: 280, height: 280, borderRadius: '50%', background: 'var(--te-600)', top: -80, right: -70, opacity: 0.5 }} />
          <div style={{ position: 'absolute', width: 180, height: 180, borderRadius: '50%', background: 'var(--te-800)', bottom: -60, left: -30, opacity: 0.4 }} />
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'auto' }}>
              <div style={{ width: 38, height: 38, background: '#fff', borderRadius: 'var(--r8)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src="/logo.png" alt="Eduvyapar" style={{ width: 34, height: 34, objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500, color: '#fff' }}>Eduvyapar</div>
                <div style={{ fontSize: 11, color: 'var(--te-200)', marginTop: 1 }}>Vidyavardhini Mandal</div>
              </div>
            </div>

            {/* Hero */}
            <div style={{ marginBottom: 24 }}>
              <h1 style={{ fontSize: 26, fontWeight: 500, color: '#fff', lineHeight: 1.25, marginBottom: 8 }}>
                Welcome to your<br /><span style={{ color: 'var(--am-400)' }}>Smart Campus</span>
              </h1>
              <p style={{ fontSize: 13, color: 'var(--te-100)', lineHeight: 1.6, marginTop: 10 }}>
                Where education meets innovation, seamlessly.
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
              {[['2,341', 'Students enrolled'], ['35', 'Staff on duty'], ['23', 'Modules active']].map(([val, lbl]) => (
                <div key={lbl} style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 'var(--r8)', padding: '10px 12px', flex: 1 }}>
                  <div style={{ fontSize: 17, fontWeight: 500, color: '#fff' }}>{val}</div>
                  <div style={{ fontSize: 11, color: 'var(--te-200)', marginTop: 1 }}>{lbl}</div>
                </div>
              ))}
            </div>

            {/* Portal pills */}
            <div>
              <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--te-200)', fontWeight: 500, marginBottom: 7 }}>Sign in as</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {portalPills.map(p => (
                  <button
                    key={p.key}
                    onClick={() => setPortal(p.key)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: 'var(--r20)',
                      fontSize: 12,
                      fontWeight: 500,
                      background: portal === p.key ? 'var(--am-400)' : 'rgba(255,255,255,.1)',
                      border: `1px solid ${portal === p.key ? 'var(--am-400)' : 'rgba(255,255,255,.15)'}`,
                      color: portal === p.key ? '#1c1b18' : 'var(--te-100)',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      transition: '0.15s',
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <div style={{ fontSize: 11, color: 'var(--te-200)', marginTop: 10, display: 'flex', alignItems: 'center', gap: 5 }}>
                <IconLock size={12} /> End-to-end secure · 24/7 support active
              </div>

              {/* Social links */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16 }}>
                <span style={{ fontSize: 11, color: 'var(--te-200)', marginRight: 2 }}>Follow us</span>
                {[
                  { href: 'https://wa.me/', icon: <IconBrandWhatsapp size={16} />, label: 'WhatsApp' },
                  { href: 'https://linkedin.com', icon: <IconBrandLinkedin size={16} />, label: 'LinkedIn' },
                  { href: 'https://facebook.com', icon: <IconBrandFacebook size={16} />, label: 'Facebook' },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.8)', textDecoration: 'none', transition: '0.15s', flexShrink: 0 }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.25)'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.12)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,.8)' }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 44px' }}>
          {/* Theme toggle */}
          <div style={{ position: 'absolute', top: 16, right: 16 }}>
            <button className="theme-btn" onClick={toggleTheme}>
              {theme === 'dark' ? <IconSun size={17} /> : <IconMoon size={17} />}
            </button>
          </div>

          {portal === 'admin' && (
            <AdminForm
              username={username} setUsername={setUsername}
              password={password} setPassword={setPassword}
              showPass={showPass} setShowPass={setShowPass}
              error={error} setError={setError}
              doLogin={doLogin}
              onForgot={() => setPortal('forgot')}
              onPreAdmit={() => setPortal('preadmit')}
            />
          )}
          {portal === 'parent' && <ParentForm onBack={() => setPortal('admin')} onSubmit={() => navigate({ to: '/dashboard' })} />}
          {portal === 'student' && <StudentForm onSubmit={() => navigate({ to: '/dashboard' })} />}
          {portal === 'preadmit' && <PreAdmitForm onBack={() => setPortal('admin')} onSubmit={() => navigate({ to: '/admission' })} />}
          {portal === 'forgot' && <ForgotForm onBack={() => setPortal('admin')} />}

          <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, fontSize: 11, color: 'var(--text-secondary)' }}>
            <IconLock size={12} /> Secured · Toll Free: 01206901888
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Sub-forms ──

function Eyebrow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--te-600)', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 5 }}>
      {icon} {text}
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 14 }}>
      <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)' }}>{label}</label>
      {children}
    </div>
  )
}

function InpWrap({ icon, children }: { icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {icon && (
        <span style={{ position: 'absolute', left: 11, fontSize: 16, color: 'var(--text-secondary)', pointerEvents: 'none', zIndex: 1, display: 'flex' }}>
          {icon}
        </span>
      )}
      {children}
    </div>
  )
}

const inpStyle = (hasIcon = true): React.CSSProperties => ({
  height: 42,
  borderRadius: 'var(--r8)',
  border: '0.5px solid var(--border-secondary)',
  padding: hasIcon ? '0 36px' : '0 12px',
  fontSize: 13,
  color: 'var(--text-primary)',
  background: 'var(--bg-primary)',
  width: '100%',
  outline: 'none',
  fontFamily: 'inherit',
  transition: '0.15s',
})

function SubmitBtn({ children, onClick, style }: { children: React.ReactNode; onClick?: () => void; style?: React.CSSProperties }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%', height: 44, borderRadius: 'var(--r8)', background: 'var(--te-600)', color: '#fff',
        fontSize: 14, fontWeight: 500, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: 7, fontFamily: 'inherit', transition: '0.15s', ...style,
      }}
    >
      {children}
    </button>
  )
}

function Divider({ text }: { text?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '16px 0' }}>
      <div style={{ flex: 1, height: '0.5px', background: 'var(--border-tertiary)' }} />
      <span style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{text ?? 'or'}</span>
      <div style={{ flex: 1, height: '0.5px', background: 'var(--border-tertiary)' }} />
    </div>
  )
}

function AltBtn({ children, onClick, style }: { children: React.ReactNode; onClick?: () => void; style?: React.CSSProperties }) {
  return (
    <button
      onClick={onClick}
      style={{ width: '100%', height: 40, borderRadius: 'var(--r8)', border: '0.5px solid var(--border-secondary)', background: 'transparent', fontSize: 13, color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, fontFamily: 'inherit', transition: '0.15s', ...style }}
    >
      {children}
    </button>
  )
}

function AdminForm({ username, setUsername, password, setPassword, showPass, setShowPass, error, setError, doLogin, onForgot, onPreAdmit }: any) {
  return (
    <>
      <Eyebrow icon={<IconShieldCheck size={13} />} text="Admin & Staff portal" />
      <div style={{ fontSize: 22, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 4 }}>Sign in to Dashboard</div>
      <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 22 }}>Enter your credentials to access the campus management system</div>

      {error && (
        <div style={{ background: '#FEF2F2', border: '0.5px solid #FECACA', borderRadius: 'var(--r8)', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, fontSize: 12, color: '#991B1B' }}>
          <IconAlertCircle size={16} style={{ flexShrink: 0 }} /> Incorrect username or password.
        </div>
      )}

      <Field label="Username">
        <InpWrap icon={<IconUser size={16} />}>
          <input className="form-inp" style={inpStyle()} placeholder="Enter your username" value={username} onChange={e => { setUsername(e.target.value); setError(false) }} autoComplete="username" />
        </InpWrap>
      </Field>

      <Field label="Password">
        <InpWrap icon={<IconLock size={16} />}>
          <input
            className="form-inp"
            style={{ ...inpStyle(), paddingRight: 36 }}
            type={showPass ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={e => { setPassword(e.target.value); setError(false) }}
          />
          <button onClick={() => setShowPass((s: boolean) => !s)} style={{ position: 'absolute', right: 11, background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', padding: 0 }}>
            {showPass ? <IconEyeOff size={15} /> : <IconEye size={15} />}
          </button>
        </InpWrap>
      </Field>

      <button onClick={onForgot} style={{ fontSize: 11, color: 'var(--te-600)', cursor: 'pointer', background: 'none', border: 'none', display: 'block', textAlign: 'right', marginTop: -8, marginBottom: 14, fontFamily: 'inherit' }}>
        Forgot password?
      </button>

      <label style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, color: 'var(--text-secondary)', cursor: 'pointer', marginBottom: 16 }}>
        <input type="checkbox" style={{ width: 15, height: 15, accentColor: 'var(--te-600)' }} /> Keep me signed in
      </label>

      <SubmitBtn onClick={doLogin}>Sign in to Dashboard <IconArrowRight size={16} /></SubmitBtn>
      <Divider />
      <AltBtn onClick={onPreAdmit}><IconUserPlus size={16} /> Go to Pre-admission Portal</AltBtn>
    </>
  )
}

function ParentForm({ onBack, onSubmit }: { onBack: () => void; onSubmit: () => void }) {
  return (
    <>
      <Eyebrow icon={<IconHeart size={13} />} text="Parent portal" />
      <div style={{ fontSize: 22, fontWeight: 500, marginBottom: 4 }}>Welcome back</div>
      <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 22 }}>Sign in with your registered mobile number</div>
      <div style={{ background: 'var(--te-50)', border: '0.5px solid var(--te-200)', borderRadius: 'var(--r8)', padding: '10px 12px', fontSize: 12, color: 'var(--te-700)', marginBottom: 14, lineHeight: 1.5 }}>
        A 6-digit OTP will be sent to your registered mobile.
      </div>
      <Field label="Mobile number *">
        <InpWrap icon={<IconPhone size={16} />}>
          <input className="form-inp" style={inpStyle()} placeholder="+91 Enter mobile number" inputMode="tel" />
        </InpWrap>
      </Field>
      <Field label="Date of birth *">
        <InpWrap icon={<IconCalendar size={16} />}>
          <input className="form-inp" style={inpStyle()} type="date" />
        </InpWrap>
      </Field>
      <SubmitBtn onClick={onSubmit} style={{ marginTop: 4 }}>Send OTP <IconSend size={16} /></SubmitBtn>
      <Divider />
      <AltBtn onClick={onBack}><IconShieldCheck size={16} /> Admin / Staff sign in</AltBtn>
    </>
  )
}

function StudentForm({ onSubmit }: { onSubmit: () => void }) {
  return (
    <>
      <Eyebrow icon={<IconBackpack size={13} />} text="Student portal" />
      <div style={{ fontSize: 22, fontWeight: 500, marginBottom: 4 }}>Student sign in</div>
      <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 22 }}>Use your student ID and date of birth</div>
      <Field label="Student ID *">
        <InpWrap icon={<IconIdBadge size={16} />}>
          <input className="form-inp" style={inpStyle()} placeholder="e.g. STU-02341" />
        </InpWrap>
      </Field>
      <Field label="Date of birth *">
        <InpWrap icon={<IconCalendar size={16} />}>
          <input className="form-inp" style={inpStyle()} type="date" />
        </InpWrap>
      </Field>
      <SubmitBtn onClick={onSubmit} style={{ marginTop: 4 }}>Access Student Portal <IconArrowRight size={16} /></SubmitBtn>
    </>
  )
}

function PreAdmitForm({ onBack, onSubmit }: { onBack: () => void; onSubmit: () => void }) {
  return (
    <>
      <Eyebrow icon={<IconUserPlus size={13} />} text="Pre-admission portal" />
      <div style={{ fontSize: 22, fontWeight: 500, marginBottom: 4 }}>Apply for admission</div>
      <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 22 }}>New to AIVRM? Start your admission application here.</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
        <Field label="First name *">
          <InpWrap icon={<IconUser size={16} />}>
            <input className="form-inp" style={inpStyle()} placeholder="First name" />
          </InpWrap>
        </Field>
        <Field label="Last name">
          <input className="form-inp" style={inpStyle(false)} placeholder="Last name" />
        </Field>
      </div>
      <Field label="Mobile number *">
        <InpWrap icon={<IconPhone size={16} />}>
          <input className="form-inp" style={inpStyle()} placeholder="+91 Mobile number" inputMode="tel" />
        </InpWrap>
      </Field>
      <Field label="Applying for class *">
        <InpWrap icon={<TablerIconSchool size={16} />}>
          <select className="form-inp" style={{ ...inpStyle(), appearance: 'none', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', paddingRight: 28 }}>
            <option value="">Select a class</option>
            {['LKG', 'UKG', 'I STD', 'II STD', 'III STD'].map(c => <option key={c}>{c}</option>)}
          </select>
        </InpWrap>
      </Field>
      <SubmitBtn onClick={onSubmit}>Start application <IconArrowRight size={16} /></SubmitBtn>
      <Divider text="already applied?" />
      <AltBtn onClick={onBack}><IconLogin size={16} /> Sign in with existing account</AltBtn>
    </>
  )
}

function ForgotForm({ onBack }: { onBack: () => void }) {
  return (
    <>
      <Eyebrow icon={<IconKey size={13} />} text="Password reset" />
      <div style={{ fontSize: 22, fontWeight: 500, marginBottom: 4 }}>Reset your password</div>
      <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 22 }}>Enter your username and we'll send reset instructions</div>
      <Field label="Username or email">
        <InpWrap icon={<IconUser size={16} />}>
          <input className="form-inp" style={inpStyle()} placeholder="Enter username or email" />
        </InpWrap>
      </Field>
      <SubmitBtn>Send reset instructions <IconSend size={16} /></SubmitBtn>
      <AltBtn onClick={onBack} style={{ marginTop: 10 }}><IconArrowLeft size={16} /> Back to sign in</AltBtn>
    </>
  )
}
