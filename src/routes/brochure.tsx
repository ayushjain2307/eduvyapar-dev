import Topbar from '../components/layout/Topbar'
import { IconDownload, IconExternalLink } from '@tabler/icons-react'

const PDF_PATH = '/brochure.pdf'
const PDF_NAME = 'Eduvyapar-Brochure-Teal-v2.pdf'

export default function BrochurePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Topbar title="Brochure" breadcrumb="Eduvyapar School Brochure" />

      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '16px 20px' }}>
        {/* Action bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-primary)' }}>Eduvyapar Brochure — Teal v2</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>Academic Year 2025–26</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 'var(--r8)', border: '0.5px solid var(--border-secondary)', background: 'var(--bg-primary)', fontSize: 13, color: 'var(--text-secondary)', cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'none', transition: '0.15s' }}
            >
              <IconExternalLink size={15} /> Open in tab
            </a>
            <a
              href={PDF_PATH}
              download={PDF_NAME}
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 'var(--r8)', border: 'none', background: 'var(--te-600)', fontSize: 13, fontWeight: 500, color: '#fff', cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'none', transition: '0.15s' }}
            >
              <IconDownload size={15} /> Download
            </a>
          </div>
        </div>

        {/* PDF Viewer */}
        <div style={{ flex: 1, borderRadius: 'var(--r12)', overflow: 'hidden', border: '0.5px solid var(--border-tertiary)', background: 'var(--bg-secondary)' }}>
          <iframe
            src={PDF_PATH}
            title="Eduvyapar Brochure"
            width="100%"
            height="100%"
            style={{ border: 'none', display: 'block' }}
          />
        </div>
      </div>
    </div>
  )
}
