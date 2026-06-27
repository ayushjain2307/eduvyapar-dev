import Topbar from '../components/layout/Topbar'
import { IconFileDescription, IconDownload, IconExternalLink } from '@tabler/icons-react'

export default function BrochurePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Topbar title="Brochure" breadcrumb="AIVRM School Brochure" />

      <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 800 }}>
          {/* Header card */}
          <div style={{ background: 'var(--bg-primary)', borderRadius: 'var(--r12)', border: '0.5px solid var(--border-tertiary)', padding: 24, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
              <div style={{ width: 56, height: 56, borderRadius: 'var(--r12)', background: 'var(--te-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconFileDescription size={28} color="var(--te-600)" />
              </div>
              <div>
                <h1 style={{ fontSize: 20, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 4 }}>AIVRM School Brochure</h1>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Vidyavardhini Mandal — Academic Year 2025–26</p>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 'var(--r8)', border: '0.5px solid var(--border-secondary)', background: 'transparent', fontSize: 13, color: 'var(--text-secondary)', cursor: 'pointer', fontFamily: 'inherit', transition: '0.15s' }}>
                  <IconExternalLink size={15} /> Open
                </button>
                <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 'var(--r8)', border: 'none', background: 'var(--te-600)', fontSize: 13, fontWeight: 500, color: '#fff', cursor: 'pointer', fontFamily: 'inherit', transition: '0.15s' }}>
                  <IconDownload size={15} /> Download
                </button>
              </div>
            </div>

            {/* PDF placeholder */}
            <div style={{ borderRadius: 'var(--r8)', border: '0.5px dashed var(--border-secondary)', background: 'var(--bg-secondary)', minHeight: 500, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
              <IconFileDescription size={48} color="var(--text-secondary)" style={{ opacity: 0.4 }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 6 }}>AIVRM_Brochure_2025-26.pdf</div>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', maxWidth: 360, lineHeight: 1.6 }}>
                  The school brochure PDF will appear here once uploaded by the administration. It contains course offerings, facilities, fee structures, and admission details.
                </p>
              </div>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 20px', borderRadius: 'var(--r8)', border: 'none', background: 'var(--te-600)', fontSize: 13, fontWeight: 500, color: '#fff', cursor: 'pointer', fontFamily: 'inherit', marginTop: 8 }}>
                <IconDownload size={15} /> Download Brochure
              </button>
            </div>
          </div>

          {/* Info cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            {[
              { title: 'Established', value: '1985', sub: '40+ years of excellence' },
              { title: 'Students', value: '2,341', sub: 'Active enrollments' },
              { title: 'Staff', value: '35+', sub: 'Qualified educators' },
            ].map(info => (
              <div key={info.title} style={{ background: 'var(--bg-primary)', borderRadius: 'var(--r12)', border: '0.5px solid var(--border-tertiary)', padding: '16px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 600, color: 'var(--te-600)', marginBottom: 4 }}>{info.value}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 2 }}>{info.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{info.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
