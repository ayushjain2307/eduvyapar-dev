import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import Topbar from '../components/layout/Topbar'
import { IconArrowLeft, IconArrowRight, IconCheck, IconCamera } from '@tabler/icons-react'

const STEPS = [
  { num: 1, label: 'Student Info', sub: 'Academic & personal' },
  { num: 2, label: 'Address', sub: 'Residential & permanent' },
  { num: 3, label: 'Parents / Guardian', sub: 'Family details' },
  { num: 4, label: 'Other Info', sub: 'Documents & health' },
]

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <label style={{ fontSize: 11, fontWeight: 500, color: 'var(--text-secondary)' }}>
        {label} {required && <span style={{ color: '#EF4444' }}>*</span>}
      </label>
      {children}
    </div>
  )
}

const inpStyle: React.CSSProperties = {
  height: 38,
  borderRadius: 'var(--r8)',
  border: '0.5px solid var(--border-secondary)',
  padding: '0 10px',
  fontSize: 12,
  color: 'var(--text-primary)',
  background: 'var(--bg-primary)',
  width: '100%',
  outline: 'none',
  fontFamily: 'inherit',
  transition: '0.15s',
}

const selectStyle: React.CSSProperties = {
  ...inpStyle,
  appearance: 'none',
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 10px center',
  paddingRight: 28,
  cursor: 'pointer',
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-secondary)', margin: '18px 0 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
    {children}
    <span style={{ flex: 1, height: '0.5px', background: 'var(--border-tertiary)' }} />
  </div>
)

function Step1() {
  return (
    <div>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 3 }}>Student Information</h2>
        <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Fill in the student's academic and personal details carefully</p>
      </div>

      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <SectionTitle>Academic Details</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 10 }}>
            <Field label="Applying for Class" required>
              <select style={selectStyle}>
                <option value="">Select class</option>
                {['LKG', 'UKG', 'I STD', 'II STD', 'III STD', 'IV STD', 'V STD'].map(c => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="Section">
              <select style={selectStyle}><option>A</option><option>B</option><option>C</option></select>
            </Field>
            <Field label="Academic Year" required>
              <select style={selectStyle}><option>2026–27</option><option>2025–26</option></select>
            </Field>
          </div>

          <SectionTitle>Personal Details</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
            <Field label="First Name" required><input style={inpStyle} placeholder="First name" /></Field>
            <Field label="Last Name" required><input style={inpStyle} placeholder="Last name" /></Field>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 10 }}>
            <Field label="Date of Birth" required><input style={inpStyle} type="date" /></Field>
            <Field label="Gender" required>
              <select style={selectStyle}><option>Male</option><option>Female</option><option>Other</option></select>
            </Field>
            <Field label="Blood Group">
              <select style={selectStyle}><option value="">Select</option>{['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(b => <option key={b}>{b}</option>)}</select>
            </Field>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <Field label="Mother Tongue"><input style={inpStyle} placeholder="e.g. Marathi" /></Field>
            <Field label="Religion"><input style={inpStyle} placeholder="e.g. Hindu" /></Field>
          </div>
        </div>

        {/* Photo upload */}
        <div>
          <SectionTitle>Photo</SectionTitle>
          <div style={{ width: 90, height: 100, borderRadius: 'var(--r8)', border: '1.5px dashed var(--border-secondary)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, cursor: 'pointer', background: 'var(--bg-secondary)', fontSize: 11, color: 'var(--text-secondary)', textAlign: 'center' }}>
            <IconCamera size={22} />
            <span>Upload<br />photo</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Step2() {
  return (
    <div>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 3 }}>Address Details</h2>
        <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Enter residential and permanent address</p>
      </div>
      <SectionTitle>Residential Address</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
        <Field label="Flat / House No." required><input style={inpStyle} placeholder="e.g. 12B" /></Field>
        <Field label="Street / Area" required><input style={inpStyle} placeholder="Street name" /></Field>
        <Field label="City" required><input style={inpStyle} placeholder="City" /></Field>
        <Field label="State" required><input style={inpStyle} placeholder="State" /></Field>
        <Field label="PIN Code" required><input style={inpStyle} placeholder="6-digit PIN" /></Field>
        <Field label="Country"><input style={inpStyle} defaultValue="India" /></Field>
      </div>
      <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 'var(--r8)', border: '0.5px solid var(--border-secondary)', background: 'var(--bg-primary)', fontSize: 12, color: 'var(--text-secondary)', cursor: 'pointer', fontFamily: 'inherit', marginBottom: 10 }}>
        Copy address to Permanent Address
      </button>
      <SectionTitle>Permanent Address</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <Field label="Flat / House No."><input style={inpStyle} placeholder="e.g. 12B" /></Field>
        <Field label="Street / Area"><input style={inpStyle} placeholder="Street name" /></Field>
        <Field label="City"><input style={inpStyle} placeholder="City" /></Field>
        <Field label="State"><input style={inpStyle} placeholder="State" /></Field>
        <Field label="PIN Code"><input style={inpStyle} placeholder="6-digit PIN" /></Field>
        <Field label="Country"><input style={inpStyle} defaultValue="India" /></Field>
      </div>
    </div>
  )
}

function Step3() {
  return (
    <div>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 3 }}>Parents / Guardian Details</h2>
        <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Enter family contact information</p>
      </div>
      {['Father', 'Mother'].map(parent => (
        <div key={parent}>
          <SectionTitle>{parent}'s Details</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 10 }}>
            <Field label={`${parent}'s Name`} required><input style={inpStyle} placeholder={`${parent} full name`} /></Field>
            <Field label="Occupation"><input style={inpStyle} placeholder="e.g. Engineer" /></Field>
            <Field label="Mobile" required><input style={inpStyle} placeholder="+91 Mobile number" /></Field>
            <Field label="Email"><input style={inpStyle} type="email" placeholder="email@example.com" /></Field>
            <Field label="Annual Income">
              <select style={selectStyle}>
                <option>Below ₹2L</option><option>₹2L–₹5L</option><option>₹5L–₹10L</option><option>Above ₹10L</option>
              </select>
            </Field>
          </div>
        </div>
      ))}
      <SectionTitle>Emergency Contact</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <Field label="Contact Name"><input style={inpStyle} placeholder="Name" /></Field>
        <Field label="Relation"><input style={inpStyle} placeholder="e.g. Uncle" /></Field>
        <Field label="Mobile"><input style={inpStyle} placeholder="+91 Mobile number" /></Field>
      </div>
    </div>
  )
}

function Step4() {
  return (
    <div>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 3 }}>Other Information</h2>
        <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Documents and health details</p>
      </div>
      <SectionTitle>Previous School</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
        <Field label="Previous School Name"><input style={inpStyle} placeholder="School name" /></Field>
        <Field label="Board"><input style={inpStyle} placeholder="e.g. CBSE / State Board" /></Field>
        <Field label="Last Class Passed"><input style={inpStyle} placeholder="e.g. IV STD" /></Field>
        <Field label="% / Grade"><input style={inpStyle} placeholder="e.g. 85% or A+" /></Field>
      </div>
      <SectionTitle>Health Information</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
        <Field label="Any known allergies"><input style={inpStyle} placeholder="e.g. Peanut allergy" /></Field>
        <Field label="Medical conditions"><input style={inpStyle} placeholder="e.g. Asthma" /></Field>
      </div>
      <SectionTitle>Documents Upload</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        {['Birth Certificate', 'Transfer Certificate', 'Previous Marksheet', 'Aadhaar Card', 'Passport Photo (4 copies)'].map(doc => (
          <div key={doc} style={{ border: '0.5px dashed var(--border-secondary)', borderRadius: 'var(--r8)', padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer', background: 'var(--bg-secondary)', transition: '0.15s' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>
            </svg>
            <span style={{ fontSize: 11, color: 'var(--text-secondary)', textAlign: 'center', lineHeight: 1.3 }}>{doc}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const STEP_COMPONENTS = [Step1, Step2, Step3, Step4]

export default function AdmissionPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)

  const goNext = () => {
    if (step < 4) setStep(s => s + 1)
    else setDone(true)
  }

  const StepContent = STEP_COMPONENTS[step - 1]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Topbar title="Admission" breadcrumb="New Application" />

      <div style={{ flex: 1, overflow: 'hidden', display: 'flex' }}>
        {/* Step sidebar */}
        <div style={{ width: 200, background: 'var(--bg-primary)', borderRight: '0.5px solid var(--border-tertiary)', padding: '20px 16px', flexShrink: 0, overflowY: 'auto' }}>
          <div style={{ fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-secondary)', marginBottom: 16 }}>Application Steps</div>
          {STEPS.map((s, i) => {
            const isDone = s.num < step
            const isActive = s.num === step
            return (
              <div key={s.num} onClick={() => !done && setStep(s.num)} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '6px 0', cursor: 'pointer', position: 'relative' }}>
                {i < STEPS.length - 1 && (
                  <div style={{ position: 'absolute', left: 13, top: 32, bottom: -4, width: 1.5, background: isDone ? 'var(--te-500)' : 'var(--border-secondary)' }} />
                )}
                <div style={{
                  width: 26, height: 26, borderRadius: '50%',
                  border: `1.5px solid ${isActive ? 'var(--te-600)' : isDone ? 'var(--te-500)' : 'var(--border-secondary)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 500,
                  background: isActive ? 'var(--te-600)' : isDone ? 'var(--te-50)' : 'var(--bg-primary)',
                  color: isActive ? '#fff' : isDone ? 'var(--te-600)' : 'var(--text-secondary)',
                  flexShrink: 0, transition: '0.2s', zIndex: 1,
                }}>
                  {isDone ? <IconCheck size={13} /> : s.num}
                </div>
                <div style={{ paddingTop: 4 }}>
                  <div style={{ fontSize: 12, fontWeight: 500, color: isActive ? 'var(--te-700)' : 'var(--text-secondary)', lineHeight: 1.3 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 1 }}>{s.sub}</div>
                </div>
              </div>
            )
          })}

          <div style={{ marginTop: 24, padding: 12, background: 'var(--te-50)', borderRadius: 'var(--r8)', border: '0.5px solid var(--te-200)' }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--te-700)', marginBottom: 4 }}>💡 Quick tip</div>
            <div style={{ fontSize: 11, color: 'var(--te-700)', lineHeight: 1.5 }}>You can save a draft at any step and return later to complete the application.</div>
          </div>
        </div>

        {/* Form area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {done ? (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--te-50)', border: '2px solid var(--te-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconCheck size={32} color="var(--te-600)" />
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: 'var(--text-primary)' }}>Application Submitted!</div>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', textAlign: 'center', maxWidth: 400 }}>Your admission application has been received. Our team will review it and contact you within 2-3 working days.</p>
              <button
                onClick={() => navigate({ to: '/dashboard' })}
                style={{ padding: '10px 24px', borderRadius: 'var(--r8)', background: 'var(--te-600)', color: '#fff', fontSize: 13, fontWeight: 500, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                Back to Dashboard
              </button>
            </div>
          ) : (
            <>
              <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
                <StepContent />
              </div>
              {/* Footer */}
              <div style={{ padding: '12px 24px', borderTop: '0.5px solid var(--border-tertiary)', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 12, color: 'var(--text-secondary)', marginRight: 'auto' }}>Step {step} of {STEPS.length}</span>
                <div style={{ display: 'flex', gap: 8 }}>
                  {step > 1 && (
                    <button onClick={() => setStep(s => s - 1)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0 14px', height: 36, borderRadius: 'var(--r8)', border: '0.5px solid var(--border-secondary)', background: 'transparent', fontSize: 12, color: 'var(--text-secondary)', cursor: 'pointer', fontFamily: 'inherit', transition: '0.15s' }}>
                      <IconArrowLeft size={14} /> Back
                    </button>
                  )}
                  <button onClick={goNext} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0 16px', height: 36, borderRadius: 'var(--r8)', border: 'none', background: 'var(--te-600)', fontSize: 12, fontWeight: 500, color: '#fff', cursor: 'pointer', fontFamily: 'inherit', transition: '0.15s' }}>
                    {step < 4 ? (<>Next <IconArrowRight size={14} /></>) : (<><IconCheck size={14} /> Submit Application</>)}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
