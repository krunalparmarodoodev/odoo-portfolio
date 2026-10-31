import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  User, 
  Layers, 
  CheckCircle, 
  Shield, 
  X,
  Send,
  Boxes,
  Database,
  Terminal,
  ExternalLink,
  Code2,
  Filter,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeNav, setActiveNav] = useState('home');
  const [selectedVersion, setSelectedVersion] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sentMessage, setSentMessage] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Master 26 Enterprise Odoo Projects with Authentic Functional Delivery Stories
  const allProjects = [
    // 1. Migrations
    {
      id: 'migration-v13-v19',
      title: 'Enterprise Multi-Company Migration',
      version: 'v13 → v19/v20',
      edition: 'Community to Enterprise',
      category: 'Migration',
      color: '#c25e24',
      tech: 'OpenUpgrade, Python ETL, PostgreSQL, OWL',
      clientType: 'Manufacturing & Distribution Conglomerate (NDA)',
      metrics: '65GB Database, 4 Legal Entities, 0s Data Loss',
      problem: 'The business ran on v13 Community across 4 separate legal entities with 7 years of transaction history. Their accounting team spent days reconciling multi-currency entries manually, and legacy custom addons refused to run on newer Odoo releases.',
      functionalStory: 'We spent our first week mapping their chart of accounts and inter-company invoicing rules. Instead of blindly running migration scripts, we sanitized broken foreign keys, migrated historical journals in batches, and refactored their 22 custom views into modern OWL components. We rehearsed the cutover on a weekend staging branch to verify every balance before touching production.',
      solution: 'Constructed an automated schema migration pipeline with OpenUpgrade rules, refactored custom views to OWL components, and validated tax reconciliations with zero operational downtime.',
      impact: 'Upgraded system runtime by 3.8x, unlocked automated multi-currency fiscal positions, and passed external financial audit flawlessly.'
    },
    {
      id: 'migration-v10-v16',
      title: 'Legacy v10 to v16 Long-Jump Modernization',
      version: 'v10 → v16',
      edition: 'Community to Community',
      category: 'Migration',
      color: '#6b46c1',
      tech: 'Postgres SQL ETL, Python Scripts, ORM Rewrite',
      clientType: 'Automotive Parts Wholesaler',
      metrics: '12-Year Old Database Restored & Modernized',
      problem: 'Client had operated on unsupported Odoo v10 for over a decade. Old hardware was failing, and off-the-shelf migration tools crashed because the database still held deprecated fields from early OpenERP eras.',
      functionalStory: 'Rather than trying to leap across 6 major versions at once, we staged the migration into disciplined stepping-stone environments. We cleaned up orphan product attributes, converted old decimal precisions, and translated deprecated XML forms directly into v16 views. The client continued taking wholesale orders while we ran the test runs in parallel.',
      solution: 'Extracted clean relational tables, sanitized orphan records, mapped old many2one relational fields into modern v16 schemas, and re-implemented core logic from scratch.',
      impact: 'Prevented catastrophic database crashes, restored software update eligibility, and modernised the client\'s desktop infrastructure.'
    },
    {
      id: 'migration-v14-v18',
      title: 'High-Volume E-Commerce DB Migration',
      version: 'v14 → v18',
      edition: 'Enterprise to Enterprise',
      category: 'Migration',
      color: '#dd6b20',
      tech: 'Odoo.sh, Staging Pipelines, Automated Testing',
      clientType: 'Direct-to-Consumer Fashion Brand',
      metrics: '2.5 Million Invoices & Inventory Moves Migrated',
      problem: 'With millions of historic customer transactions, standard migration runs on Odoo.sh timed out repeatedly due to PostgreSQL lock contention during live retail hours.',
      functionalStory: 'We worked with the store operations team to schedule the cutover between 1:00 AM and 5:00 AM. We pre-migrated all historical static records days in advance, leaving only the recent delta delta records for cutover night. When shoppers visited the site next morning, all customer accounts, order histories, and loyalty points were intact.',
      solution: 'Wrote batch-chunked data transformers with index bypass techniques, migrating data in background worker threads without transaction timeouts.',
      impact: 'Cutover completed during a planned 4-hour midnight maintenance window with zero downtime for morning checkout shoppers.'
    },
    {
      id: 'migration-v11-v17',
      title: 'Multi-Branch POS & Retail Migration',
      version: 'v11 → v17',
      edition: 'Community to Enterprise',
      category: 'Migration',
      color: '#b7791f',
      tech: 'Python Migration Scripts, POS Module Porting',
      clientType: 'Multi-Location Pharmacy Chain',
      metrics: '34 Physical Store Outlets Upgraded Overnight',
      problem: '34 physical store outlets were tethered to legacy v11 custom POS modules that could not communicate with modern cloud receipt printers or mobile barcode scanners.',
      functionalStory: 'We spent hands-on time testing with store cashiers to ensure the updated register screens felt natural and fast. We recreated their barcode lookup rules and customer prescription tracking inside Odoo v17 OWL widgets, rolling out updates store by store after store closing without a single missed pharmacy sale.',
      solution: 'Completely re-architected the custom point-of-sale logic into clean modern OWL components and synced historical sales records without discrepancy.',
      impact: 'Enabled centralized inventory replenishment and instant fiscal reporting across all 34 branches.'
    },

    // 2. Security & Access Control
    {
      id: 'access-control',
      title: 'User-Wise Contact & Branch Segregation',
      version: 'v14 - v18',
      edition: 'Community & Enterprise',
      category: 'Security',
      color: '#319795',
      tech: 'ir.rule Domains, Record Rules, User Hierarchy',
      clientType: 'National B2B Industrial Supplier',
      metrics: '100% Data Leak Prevention across 85+ Reps',
      problem: 'Sales representatives across 5 competing regional branches could view each other\'s customer lists and inspect raw supplier purchase costs and profit margins.',
      functionalStory: 'We held workshops with branch directors to understand their real sales hierarchy. We established clear security boundaries so reps only see their assigned territory accounts, while area managers see aggregated figures. Crucially, we preserved customer support collaboration so duplicate clients couldn\'t be registered.',
      solution: 'Engineered granular dynamic ir.rule security filters restricting contact book visibility strictly to assigned salespersons, plus multi-level manager discount approvals and field-level cost masking.',
      impact: 'Completely eliminated client poaching between internal teams and secured confidential vendor pricing structures.'
    },
    {
      id: 'field-masking',
      title: 'Cost & Profit Margin Dynamic Masking',
      version: 'v15 - v20',
      edition: 'Enterprise',
      category: 'Security',
      color: '#285e61',
      tech: 'ir.model.fields.access, Custom Security Groups, XML Views',
      clientType: 'Luxury Wholesale & Watch Distributor',
      metrics: 'Zero Unauthorized Margin Exposure Across 120 Staff',
      problem: 'Junior sales clerks creating customer quotations could view vendor base purchase costs, leading to price leakages.',
      functionalStory: 'We audited every quotation and order view to identify where sensitive pricing leaked into line items. We introduced a clean role-based filter where cost and markup percentages are hidden from front-desk staff but instantly accessible to department heads approving custom discounts.',
      solution: 'Implemented field-level security inheritance masking standard_price and margin fields for all non-managerial security groups.',
      impact: 'Secured confidential markup algorithms and preserved corporate negotiation leverage.'
    },
    {
      id: 'approval-hierarchy',
      title: 'Multi-Tier Manager Discount Approval Workflow',
      version: 'v14 - v19',
      edition: 'Community & Enterprise',
      category: 'Security',
      color: '#2c5282',
      tech: 'Automated Actions, Python Constraint Rules, Chatter',
      clientType: 'Heavy Equipment & Machinery Vendor',
      metrics: 'Prevented Over $240K in Unauthorized Discounts',
      problem: 'Sales reps frequently applied high discretionary discounts on machinery deals to close quotas quickly without senior management sign-off.',
      functionalStory: 'We aligned the software with their executive governance policy: standard margins pass through immediately, discounts between 5% and 12% trigger an instant notification to the regional lead, and anything higher requires Director sign-off right inside Odoo Chatter, complete with timestamped approvals.',
      solution: 'Programmed strict validation barriers: discounts >5% require Sales Lead sign-off, >12% require Director approval, locking quote confirmation until verified.',
      impact: 'Restored corporate gross margins from 18% to 27% within the first financial quarter.'
    },

    // 3. Logistics, Warehouse & POS
    {
      id: 'warehouse-ops',
      title: 'Warehouse Restricted Operations & WMS Lock',
      version: 'v15 - v19',
      edition: 'Enterprise',
      category: 'Logistics & WMS',
      color: '#553c9a',
      tech: 'Stock Picking, Location Hierarchy, Barcode Scanning',
      clientType: 'Omnichannel Retail & Centralized Fulfillment Hub',
      metrics: '94% Reduction in Cross-Warehouse Stock Errors',
      problem: 'Floor pickers in Facility A were accidentally picking and confirming delivery shipments assigned to Facility B, creating severe inventory ghost stock errors.',
      functionalStory: 'We spent time on the warehouse floor with floor managers to observe their picking flow. We restricted terminal views so pickers only see tasks for their specific facility, added clear visual alerts when a barcode scan doesn\'t match the bay location, and blocked negative balance confirmations.',
      solution: 'Implemented strict user-to-warehouse mapping on stock.picking and internal transfers, coupled with negative stock validation barriers and mobile barcode validation.',
      impact: 'Streamlined daily order dispatch speed from 45 mins to 12 mins per batch with 99.8% stock reconciliation accuracy.'
    },
    {
      id: 'pos-offline',
      title: 'High-Volume Offline POS Sync Optimization',
      version: 'v14 - v18',
      edition: 'Enterprise',
      category: 'Logistics & WMS',
      color: '#97266d',
      tech: 'OWL, IndexedDB, POS Service Worker',
      clientType: 'Multi-Outlet Supermarket Chain',
      metrics: '50,000+ Barcoded SKUs Synchronized in Offline Mode',
      problem: 'Frequent retail internet outages caused POS registers to freeze during peak checkout hours due to heavy relational product search queries.',
      functionalStory: 'We simulated store-wide internet drops during peak shopping hours. We tuned the cash register browser storage to hold the full 50,000-item catalog locally in browser memory so cashiers can keep scanning barcodes smoothly even when offline, uploading sales in batches the second connectivity returns.',
      solution: 'Re-engineered the POS frontend cache with optimized IndexedDB storage and lightweight OWL barcode lookup listeners, syncing batches once reconnected.',
      impact: 'Zero customer checkout downtime during network drops, with cashier transactions processing in under 400ms.'
    },
    {
      id: 'batch-picking',
      title: 'Multi-Order Batch Wave Picking & Packing',
      version: 'v16 - v20',
      edition: 'Enterprise',
      category: 'Logistics & WMS',
      color: '#44337a',
      tech: 'Automated Routing, Stock Move Optimization, Barcode WMS',
      clientType: 'E-Commerce Third-Party Logistics (3PL)',
      metrics: '3.4x Faster Order Picking per Warehouse Shift',
      problem: 'Warehouse pickers were walking back and forth across a 60,000 sq ft facility picking single orders one by one.',
      functionalStory: 'We analyzed order volume patterns and regrouped small individual orders into smart picking waves. Pickers now walk down aisle by aisle with a multi-tote cart, picking items for 20 orders in a single organized pass before delivering them to packing stations.',
      solution: 'Built an algorithmic batch wave router that groups orders by physical bin proximity, generating single optimal walking paths for warehouse pickers.',
      impact: 'Cut daily warehouse picker walking distance by 62% and doubled fulfilled packages per hour.'
    },
    {
      id: 'serial-tracking',
      title: 'Automated Lot & Expiry Traceability System',
      version: 'v13 - v19',
      edition: 'Community & Enterprise',
      category: 'Logistics & WMS',
      color: '#702459',
      tech: 'Stock Production Lot, Removal Strategies (FEFO)',
      clientType: 'Food & Beverage Import/Export Distributor',
      metrics: '100% FEFO Compliance, Eliminated Perishable Spoilage',
      problem: 'Warehouse teams shipped newer inventory batches while older perishable goods expired at the back of the storage facility.',
      functionalStory: 'We worked alongside their quality assurance team to configure First-Expiry-First-Out (FEFO) routing. The system automatically prompts pickers with the specific pallet location holding the nearest expiry date, refusing confirmation if a newer lot number is scanned accidentally.',
      solution: 'Enforced strict First-Expiry-First-Out (FEFO) automated removal strategies locking dispatch slips until the oldest compliant batch was scanned.',
      impact: 'Saved $85,000 annually in expired inventory write-offs and achieved full FDA compliance.'
    },

    // 4. API & Omnichannel Integrations
    {
      id: 'omnichannel-crm',
      title: 'Omnichannel B2B Lead Webhook Engine',
      version: 'v12 - v18',
      edition: 'Community & Enterprise',
      category: 'API & Integrations',
      color: '#b83280',
      tech: 'FastAPI Webhook, JSON-RPC, IndiaMART & TradeIndia API',
      clientType: 'Heavy Machinery & Industrial Equipment Manufacturer',
      metrics: '350+ Daily Leads Captured with 0s Latency',
      problem: 'Sales teams manually logged into IndiaMART, TradeIndia, and Meta panels twice a day, leading to high buyer drop-off and lost contract opportunities.',
      functionalStory: 'We sat with the business development manager to map out their lead qualification stages. When a buyer posts a requirement on IndiaMART or TradeIndia, our webhook captures the full inquiry payload, checks for duplicate contacts, and drops a prioritized opportunity directly into the appropriate regional manager\'s pipeline.',
      solution: 'Built real-time webhook endpoints that parse buyer payloads directly into Odoo crm.lead, execute duplicate contact checks, and allocate leads via automated round-robin.',
      impact: 'Buyer response time dropped from 4 hours to under 30 seconds, boosting lead-to-opportunity conversions by 42%.'
    },
    {
      id: 'whatsapp-chatter',
      title: '2-Way WhatsApp Commerce & PDF Dispatch',
      version: 'v14 - v20',
      edition: 'Enterprise & Community',
      category: 'API & Integrations',
      color: '#b7791f',
      tech: 'WhatsApp Cloud API, Odoo Chatter Sync, Webhooks',
      clientType: 'Global Wholesale Distributor',
      metrics: '12,000+ WhatsApp Messages Synced Monthly',
      problem: 'Client communication was fragmented on sales reps\' personal phones with no visibility for managers or paper trail inside Odoo ERP.',
      functionalStory: 'We unified client messaging directly into the Odoo order screen. Sales reps can click a button to send a formal PDF quotation with payment link to a customer\'s WhatsApp, and all customer replies appear directly in Odoo Chatter so the entire team stays informed.',
      solution: 'Built a two-way WhatsApp engine mapped directly into Odoo Chatter. Sales reps send approved PDF quotations with payment links directly to WhatsApp with 1 click.',
      impact: 'Unprecedented communication transparency, 3.2x faster invoice payment turnaround, and automated delivery tracking updates sent to buyers.'
    },
    {
      id: 'shopify-connector',
      title: 'Real-Time Bi-Directional Shopify Sync',
      version: 'v15 - v20',
      edition: 'Enterprise',
      category: 'API & Integrations',
      color: '#3182ce',
      tech: 'Shopify GraphQL API, Webhook Listeners, Queue Jobs',
      clientType: 'High-Volume DTC Consumer Goods Brand',
      metrics: '40,000+ Monthly Orders Reconciled Real-Time',
      problem: 'Standard third-party Shopify connectors failed to handle multi-warehouse stock allocations and generated duplicate customer contacts on variant purchases.',
      functionalStory: 'We configured a clean sync logic honoring their fulfillment centers. When an order lands on Shopify, Odoo checks localized stock levels, books delivery orders at the closest warehouse, and updates inventory across all sales channels within seconds to prevent overselling.',
      solution: 'Developed a custom connector supporting multi-location inventory sync, automated gift-card accounting mapping, and order cancellation webhooks.',
      impact: 'Eliminated overselling across flash sales and automated end-of-day bank reconciliations.'
    },
    {
      id: 'meta-lead-sync',
      title: 'Meta Facebook Lead Ads Instant Sync',
      version: 'v13 - v19',
      edition: 'Community & Enterprise',
      category: 'API & Integrations',
      color: '#2b6cb0',
      tech: 'Meta Graph API, Webhook Handlers, CRM Pipeline',
      clientType: 'Real Estate Developer & Asset Management Firm',
      metrics: 'Instant Lead Ingestion with WhatsApp Welcome Trigger',
      problem: 'CSV downloads from Facebook Ads Manager caused sales reps to contact potential property investors 24 to 48 hours after they filled out the form.',
      functionalStory: 'We automated the entire lead handoff: as soon as an interested buyer hits submit on Facebook or Instagram, the contact is registered in Odoo CRM, assigned to a sales agent based on property interest, and sent an immediate welcome message with brochures.',
      solution: 'Engineered real-time Graph API webhook listener parsing buyer budgets, assigning to senior agents, and triggering an automated WhatsApp property brochure.',
      impact: 'Increased client site visit booking rates by 54% due to instant engagement while prospects were actively browsing.'
    },
    {
      id: 'payment-gateway',
      title: 'Custom Payment Gateway & Instant Reconciliation',
      version: 'v14 - v19',
      edition: 'Community & Enterprise',
      category: 'API & Integrations',
      color: '#2c7a7b',
      tech: 'Payment Provider API, Webhook Handlers, Account Move',
      clientType: 'B2B Wholesale Portal & Subscription Billing',
      metrics: '100% Automated Bank Reconciliations',
      problem: 'Manual verification of wire transfers and card receipts delayed order dispatch by up to 2 business days.',
      functionalStory: 'We integrated their regional payment provider directly into Odoo invoicing. When a client settles a payment, secure callbacks confirm the transaction, reconcile the accounts receivable journal, and release the sales order for warehouse dispatch automatically.',
      solution: 'Integrated custom payment provider with instant webhook listeners that mark invoices as in-payment, post ledger entries, and auto-release warehouse pickings.',
      impact: 'Eliminated manual finance verification queues and enabled same-day order dispatch.'
    },

    // 5. Accounting, Custom Reports & Finance
    {
      id: 'qweb-invoicing',
      title: 'Pixel-Perfect Multi-Format QWeb Invoicing Suite',
      version: 'v10 - v20',
      edition: 'Community & Enterprise',
      category: 'Custom Reports',
      color: '#c05621',
      tech: 'QWeb XML, Dynamic QR Codes, POS Thermal Engine',
      clientType: 'Retail Chains & International Exporters',
      metrics: '100% Tax Authority & Legal Compliance',
      problem: 'Default Odoo PDF templates lacked dynamic tax breakdowns, HS Code compliance tables, and fast thermal printer cut-off controls for POS.',
      functionalStory: 'We sat down with their chief accountant to inspect every mandatory legal requirement. We built distinct layout templates for retail invoices, wholesale billing, and export declarations with dual-currency calculations and automated dynamic QR codes.',
      solution: 'Designed bespoke QWeb report templates with dynamic payment UPI/e-invoice QR codes, multi-currency tables, digital signatures, and POS receipt layouts.',
      impact: 'Delivered audit-ready invoicing templates compliant with regional tax mandates across 3 countries.'
    },
    {
      id: 'e-invoicing-gov',
      title: 'Automated Government E-Invoicing Integration',
      version: 'v15 - v19',
      edition: 'Enterprise',
      category: 'Custom Reports',
      color: '#9c4221',
      tech: 'JSON-RPC, Cryptographic Signatures, Government API',
      clientType: 'Industrial Packaging & Polymer Manufacturer',
      metrics: '25,000+ Government IRNs & QR Codes Auto-Generated',
      problem: 'Manual generation of government e-invoices on tax portals resulted in clerical typos and severe transport delivery delays.',
      functionalStory: 'We automated the tax portal upload: when the accounting team posts an invoice in Odoo, our integration cryptographically signs the invoice, requests the Invoice Reference Number (IRN) from the government gateway, and prints the verified digital QR code onto the delivery invoice.',
      solution: 'Integrated a direct tax authority API connector that generates government IRN numbers and signed QR codes automatically when an invoice is confirmed.',
      impact: 'Zero dispatch truck delays at state checkpoints and eliminated all manual tax portal data entry.'
    },
    {
      id: 'multi-currency-ledger',
      title: 'Automated Multi-Currency Exchange Revaluation',
      version: 'v14 - v19',
      edition: 'Enterprise',
      category: 'Custom Reports',
      color: '#7b341e',
      tech: 'Central Bank API, Currency Exchange Cron, Account Move',
      clientType: 'International Logistics & Freight Forwarder',
      metrics: 'Daily Automated Ledger Revaluation Across 8 Currencies',
      problem: 'Currency fluctuations caused monthly financial balance sheet reconciliation discrepancies between overseas bank accounts and local books.',
      functionalStory: 'We configured automated central bank currency sync schedules. At the end of each fiscal month, Odoo automatically revalues open foreign currency accounts receivable and payable, generating transparent exchange gain/loss journal entries.',
      solution: 'Built an automated exchange revaluation module connecting to official central bank exchange rates, generating monthly currency gain/loss entries.',
      impact: 'Provided accurate real-time P&L visibility without waiting for end-of-month accounting adjustments.'
    },

    // 6. HR, Payroll & Workforce
    {
      id: 'custom-payroll',
      title: 'Enterprise Payroll & Sandwich Leave Engine',
      version: 'v11 - v17',
      edition: 'Community & Enterprise',
      category: 'HR & Payroll',
      color: '#2b6cb0',
      tech: 'Odoo Payroll, Python Salary Rules, Shift Logic',
      clientType: 'Multi-Facility Staffing & Security Agency',
      metrics: '650+ Monthly Payslips Generated in 3 Minutes',
      problem: 'Standard Odoo HR couldn\'t calculate sandwich leave deductions across gazetted holidays or handle variable hourly contract wages alongside salaried payroll.',
      functionalStory: 'We reviewed their employment agreements and union policies. We programmed custom salary rules that cross-reference weekend attendance logs to compute sandwich leave deductions, variable night shift premiums, and automated direct-bank batch payment files.',
      solution: 'Programmed sophisticated Python salary computation rules, automated attendance log scrapers, and batch direct-bank payment exports.',
      impact: 'Reduced monthly HR payroll calculation time from 4 full days to under 15 minutes with zero calculation discrepancies.'
    },
    {
      id: 'biometric-attendance',
      title: 'Biometric Attendance Device Sync Engine',
      version: 'v13 - v19',
      edition: 'Community & Enterprise',
      category: 'HR & Payroll',
      color: '#2a4365',
      tech: 'TCP/IP Socket Listeners, ZKTeco Protocol, Cron Tasks',
      clientType: 'Multi-Shift Manufacturing Plant (800+ Workers)',
      metrics: 'Real-Time Punch Sync across 6 Factory Gates',
      problem: 'Manual fingerprint log imports from thumb machines led to missed punch errors, overtime disputes, and payroll processing bottlenecks.',
      functionalStory: 'We connected the factory\'s 6 biometric turnstiles directly to a local bridge service. Whenever a factory worker clocks in or out, the punch is validated and pushed into Odoo in real time, accounting for shift grace periods and cafeteria breaks automatically.',
      solution: 'Engineered a standalone Python listener service communicating over local network sockets, inserting attendance punches directly into hr.attendance.',
      impact: 'Accurate to-the-second overtime logging and 100% elimination of payroll punch disputes.'
    },

    // 7. Manufacturing (MRP), PLM & Custom Automation
    {
      id: 'mrp-bom-routing',
      title: 'Multi-Level BOM & Subcontracting MRP Architecture',
      version: 'v14 - v20',
      edition: 'Enterprise',
      category: 'Manufacturing (MRP)',
      color: '#4a5568',
      tech: 'Multi-Level BOMs, Work Centers, Subcontracting Orders',
      clientType: 'Precision Electronics & PCB Assembly Manufacturer',
      metrics: '5-Tier Bill of Materials Automated Scheduling',
      problem: 'Tracking raw component consumption across in-house surface-mount assembly and external subcontractor testing caused severe stock inventory drift.',
      functionalStory: 'We structured their 5-tier product BOMs so procurement triggers purchase orders for raw parts automatically, and routes work orders directly to shop-floor tablets with visual assembly instructions and serial number logging at every station.',
      solution: 'Architected nested multi-level BOMs with automated dropship-to-subcontractor procurement rules and digital shop-floor tablet checklists.',
      impact: 'Reduced component shortages by 78% and automated precise finished good unit costing.'
    },
    {
      id: 'json-billing',
      title: 'Third-Party JSON Data Invoicing Microservice',
      version: 'v13 - v19',
      edition: 'Enterprise',
      category: 'Automation',
      color: '#2c7a7b',
      tech: 'JSON-RPC, REST API, Queue Job Background Workers',
      clientType: 'SaaS Platform & Digital Marketplace',
      metrics: '18,000+ Monthly Invoices Auto-Generated',
      problem: 'External platform processed thousands of digital subscriptions daily that needed automated tax invoice creation inside Odoo without slowing user transactions.',
      functionalStory: 'We decoupled the billing pipeline using asynchronous background queues. External web servers submit customer subscription payloads via REST, and Odoo validates fiscal positions and generates customer invoices during low-traffic server windows.',
      solution: 'Constructed an asynchronous JSON-RPC billing worker utilizing queue jobs to batch validate fiscal positions, create move records, and send back instant payment receipts.',
      impact: 'Completely eliminated manual accounting entries and eliminated billing server lag.'
    },
    {
      id: 'database-indexing',
      title: 'PostgreSQL Query Optimization & Database Indexing',
      version: 'v11 - v19',
      edition: 'Community & Enterprise',
      category: 'Automation',
      color: '#1a202c',
      tech: 'PostgreSQL EXPLAIN ANALYZE, Composite Indexes, Vacuuming',
      clientType: 'Enterprise FMCG Distributor (120GB Database)',
      metrics: 'Report Generation Time Cut From 180s to 1.8s',
      problem: 'Yearly sales and balance reports were causing Postgres query timeouts and locking tables for concurrent users.',
      functionalStory: 'We ran query execution plans during real work shifts to identify bottleneck queries on large ledger tables. By adding targeted composite indexes and tuning PostgreSQL buffer memory parameters, monthly financial reporting became instantaneous without expensive hardware upgrades.',
      solution: 'Analyzed query execution plans, implemented composite indexes on account_move_line and stock_move, and tuned Postgres work_mem and shared_buffers.',
      impact: 'Transformed system responsiveness and eliminated database locks during peak month-end close.'
    },
    {
      id: 'owl-custom-dashboard',
      title: 'Custom Executive KPI Dashboard in Modern OWL',
      version: 'v16 - v20',
      edition: 'Enterprise & Community',
      category: 'Automation',
      color: '#2d3748',
      tech: 'OWL (Odoo Web Library), Chart.js, Real-Time RPC',
      clientType: 'Venture-Backed Supply Chain Fleet',
      metrics: 'Sub-Second Real-Time Fleet & Order Metrics',
      problem: 'Executives relied on clunky spreadsheet exports to track daily revenue, pending dispatches, and warehouse utilization.',
      functionalStory: 'We interviewed the executive team to understand the 5 key numbers they look at each morning. We built an interactive OWL dashboard featuring live revenue gauges, dispatch backlog alerts, and drill-down filters accessible directly from their phones or desktop.',
      solution: 'Engineered an ultra-fast interactive executive dashboard built on OWL with live Chart.js widgets, drill-down filters, and auto-refresh intervals.',
      impact: 'Provided C-suite executives with instant visibility into daily corporate performance on mobile and desktop.'
    }
  ];

  const versionFilters = ['All', 'v10 → v16', 'v11 → v17', 'v13 → v19/v20', 'v14 → v18', 'v14 - v18', 'v14 - v19', 'v14 - v20', 'v15 - v19', 'v15 - v20', 'v16 - v20', 'v10 - v20'];
  const categoryFilters = ['All', 'Migration', 'Security', 'Logistics & WMS', 'API & Integrations', 'Custom Reports', 'HR & Payroll', 'Manufacturing (MRP)', 'Automation'];

  const filteredProjects = allProjects.filter(p => {
    const versionMatch = selectedVersion === 'All' || p.version.includes(selectedVersion.replace('All', ''));
    const categoryMatch = selectedCategory === 'All' || p.category === selectedCategory;
    return versionMatch && categoryMatch;
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:krunalparmar.odoo@gmail.com?subject=${encodeURIComponent(formData.subject || 'Odoo Development Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailto;
    setSentMessage(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      
      {/* Navigation Header */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 60px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(17, 18, 21, 0.94)',
        backdropFilter: 'blur(10px)',
        zIndex: 100
      }}>
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('home');
            setActiveNav('home');
          }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid var(--accent-green)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            fontSize: '1rem',
            color: '#ffffff',
            letterSpacing: '-1px'
          }}>
            K<span style={{ color: 'var(--accent-green)' }}>P</span>
          </div>
        </a>

        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('home');
              setActiveNav('home');
            }}
            className={`nav-link ${currentPage === 'home' && activeNav === 'home' ? 'active' : ''}`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('home');
              setActiveNav('about');
              setTimeout(() => {
                const el = document.getElementById('about');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className={`nav-link ${currentPage === 'home' && activeNav === 'about' ? 'active' : ''}`}
          >
            About
          </a>
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('portfolio-deep');
              setActiveNav('portfolio');
            }}
            className={`nav-link ${currentPage === 'portfolio-deep' || activeNav === 'portfolio' ? 'active' : ''}`}
          >
            Portfolio <span style={{ fontSize: '0.75rem', background: 'var(--accent-green)', padding: '2px 8px', borderRadius: '10px', color: '#fff', marginLeft: '4px' }}>26 Projects</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('home');
              setActiveNav('contact');
              setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className={`nav-link ${currentPage === 'home' && activeNav === 'contact' ? 'active' : ''}`}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* VIEW 1: MAIN HOME PAGE */}
      {currentPage === 'home' && (
        <>
          <section 
            id="home" 
            style={{
              minHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '140px 40px 60px 40px',
              maxWidth: '1100px',
              margin: '0 auto',
              position: 'relative'
            }}
          >
            <div style={{
              position: 'fixed',
              left: '40px',
              bottom: '50px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              zIndex: 10
            }}>
              <a href="https://github.com/krunalparmarodoodev" target="_blank" rel="noreferrer" style={{ color: 'var(--text-sub)', transition: 'color 0.2s' }}>
                <GithubIcon size={20} />
              </a>
              <a href="mailto:krunalparmar.odoo@gmail.com" style={{ color: 'var(--text-sub)', transition: 'color 0.2s' }}>
                <Mail size={20} />
              </a>
              <a href="#contact" style={{ color: 'var(--text-sub)', transition: 'color 0.2s' }}>
                <LinkedinIcon size={20} />
              </a>
              <a href="#home" style={{ color: 'var(--text-sub)', transition: 'color 0.2s' }}>
                <TwitterIcon size={20} />
              </a>
            </div>

            <div style={{ maxWidth: '850px' }}>
              <h1 style={{ 
                fontSize: 'clamp(3.8rem, 7.5vw, 6.2rem)', 
                fontWeight: '900', 
                letterSpacing: '-0.035em', 
                lineHeight: '1.05',
                marginBottom: '20px' 
              }}>
                Krunal Parmar
              </h1>
              <p style={{ 
                fontSize: '2rem', 
                fontWeight: '400', 
                color: 'var(--text-sub)',
                marginBottom: '42px'
              }}>
                I'm an <strong style={{ color: '#fff', fontWeight: '600' }}>Odoo ERP Developer</strong>
              </p>

              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
                <button 
                  onClick={() => setCurrentPage('portfolio-deep')} 
                  className="btn-green"
                  style={{ cursor: 'pointer' }}
                >
                  View Work <ArrowRight size={18} />
                </button>
                <a 
                  href="#about" 
                  style={{ 
                    color: 'var(--text-sub)', 
                    textDecoration: 'none', 
                    fontSize: '1.05rem',
                    fontWeight: '500'
                  }}
                >
                  About Me &rarr;
                </a>
              </div>
            </div>
          </section>

          {/* About Me Section with Original Color Square Photo */}
          <section 
            id="about" 
            style={{
              padding: '120px 80px',
              maxWidth: '1280px',
              margin: '0 auto',
              borderTop: '1px solid var(--border-line)'
            }}
          >
            <div className="section-header">
              <div className="section-pretitle">Let me introduce myself</div>
              <h2 className="section-title">About Me</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '460px 1fr', gap: '60px', alignItems: 'center' }}>
              
              <div style={{
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '12px',
                borderRadius: '12px',
                backgroundColor: 'var(--bg-surface)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6)'
              }}>
                <img 
                  src="/profile.png" 
                  alt="Krunal Parmar" 
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: '8px',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <div>
                <div style={{ color: 'var(--accent-green)', fontWeight: '600', fontSize: '1rem', marginBottom: '8px' }}>
                  Nice to meet you
                </div>
                <h3 style={{ fontSize: '1.85rem', fontWeight: '800', lineHeight: '1.3', marginBottom: '20px' }}>
                  Senior Odoo ERP Developer who creates reliable enterprise solutions!
                </h3>
                <p style={{ color: 'var(--text-sub)', lineHeight: '1.7', fontSize: '1rem', marginBottom: '28px' }}>
                  With <strong>4+ years of specialized Odoo engineering</strong> and over <strong>26+ delivered implementations</strong>, my expertise spans from older legacy versions (v10–v13) up to the latest releases (v14–v20 Community & Enterprise). I specialize in complex record-level security (contact & warehouse segregation), seamless multi-company database migrations, custom payroll engines, and real-time API integrations (IndiaMART, TradeIndia, and WhatsApp).
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '18px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border-line)',
                  marginBottom: '32px',
                  fontSize: '0.95rem'
                }}>
                  <div>
                    <span style={{ color: 'var(--text-sub)' }}>Name: </span>
                    <strong style={{ color: '#fff' }}>Krunal Parmar</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-sub)' }}>Email: </span>
                    <a href="mailto:krunalparmar.odoo@gmail.com" style={{ color: 'var(--accent-green)', textDecoration: 'none' }}>
                      krunalparmar.odoo@gmail.com
                    </a>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-sub)' }}>Versions: </span>
                    <strong style={{ color: '#fff' }}>v10 to v20 (Community & Enterprise)</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-sub)' }}>Availability: </span>
                    <span style={{ color: 'var(--accent-green)', fontWeight: '600' }}>Open for work (Hourly & Contract)</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <a href="#contact" className="btn-green">
                    Hire Me
                  </a>
                  <button 
                    onClick={() => setCurrentPage('portfolio-deep')}
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#fff',
                      padding: '12px 24px',
                      borderRadius: '9999px',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      fontWeight: '600'
                    }}
                  >
                    View All 26 Projects &rarr;
                  </button>
                </div>

              </div>

            </div>
          </section>

          {/* Quick Bento Portfolio Preview */}
          <section 
            id="portfolio" 
            style={{
              padding: '120px 80px',
              maxWidth: '1240px',
              margin: '0 auto',
              borderTop: '1px solid var(--border-line)'
            }}
          >
            <div className="section-header">
              <div className="section-pretitle">View my work</div>
              <h2 className="section-title">Portfolio</h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
              gap: '24px'
            }}>
              {allProjects.slice(0, 6).map((project) => (
                <div 
                  key={project.id}
                  className="project-card"
                  style={{ backgroundColor: project.color }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div style={{ maxWidth: '65%' }}>
                    <div style={{ fontStyle: 'italic', fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.88)', marginBottom: '8px' }}>
                      {project.tech}
                    </div>
                    <h3 style={{ fontSize: '2.1rem', fontWeight: '800', lineHeight: '1.2', color: '#ffffff', marginBottom: '16px' }}>
                      {project.title}
                    </h3>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '700', fontSize: '0.95rem', color: '#ffffff' }}>
                      View Work &rarr;
                    </div>
                  </div>

                  <div 
                    className="laptop-mockup"
                    style={{
                      position: 'absolute',
                      right: '-10px',
                      bottom: '-10px',
                      width: '210px',
                      height: '140px',
                      backgroundColor: '#1a1a1a',
                      borderRadius: '10px 10px 0 0',
                      border: '6px solid #2d3748',
                      borderBottom: '10px solid #4a5568',
                      boxShadow: '-10px 15px 30px rgba(0,0,0,0.5)',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{ background: '#2d3748', height: '14px', display: 'flex', alignItems: 'center', padding: '0 6px', gap: '4px' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#ff5f56' }} />
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#ffbd2e' }} />
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#27c93f' }} />
                    </div>
                    <div style={{ flex: 1, backgroundColor: '#0d1117', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ fontSize: '0.62rem', color: 'var(--accent-green)', fontFamily: 'monospace' }}>
                        odoo-bin -d enterprise
                      </div>
                      <div style={{ fontSize: '0.52rem', color: '#8b949e', fontFamily: 'monospace', marginTop: '4px' }}>
                        ✔ Modules loaded: OK
                      </div>
                      <div style={{ fontSize: '0.52rem', color: '#8b949e', fontFamily: 'monospace' }}>
                        ✔ Ledger sync: 100%
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <button 
                onClick={() => setCurrentPage('portfolio-deep')} 
                className="btn-green"
                style={{ padding: '16px 40px', fontSize: '1.05rem', cursor: 'pointer' }}
              >
                View All 26 Production Implementations & Case Studies &rarr;
              </button>
            </div>
          </section>

          {/* Contact Section */}
          <section 
            id="contact" 
            style={{
              padding: '120px 80px',
              maxWidth: '1240px',
              margin: '0 auto',
              borderTop: '1px solid var(--border-line)'
            }}
          >
            <div className="section-header">
              <div className="section-pretitle">Get in touch</div>
              <h2 className="section-title">Contact</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px' }}>
              
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '24px' }}>
                  Message Me
                </h3>
                
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-line)',
                        borderRadius: '8px',
                        padding: '14px 16px',
                        color: '#fff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-line)',
                        borderRadius: '8px',
                        padding: '14px 16px',
                        color: '#fff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <input 
                    type="text" 
                    placeholder="Subject" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-line)',
                      borderRadius: '8px',
                      padding: '14px 16px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />

                  <textarea 
                    rows="5"
                    placeholder="Message" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-line)',
                      borderRadius: '8px',
                      padding: '14px 16px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />

                  <button type="submit" className="btn-green" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
                    Send Message
                  </button>

                  {sentMessage && (
                    <div style={{ color: 'var(--accent-green)', fontSize: '0.9rem', marginTop: '6px' }}>
                      Opening your email client with your message ready to send!
                    </div>
                  )}
                </form>
              </div>

              <div style={{ paddingLeft: '20px' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '12px' }}>
                  Contact Information
                </h3>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '32px' }}>
                  Open for opportunities. Let's connect and build something awesome together!
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '24px' }}>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ color: 'var(--accent-green)' }}><User size={22} /></div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>Name</div>
                      <div style={{ fontWeight: '600', fontSize: '1rem' }}>Krunal Parmar</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ color: 'var(--accent-green)' }}><MapPin size={22} /></div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>Location</div>
                      <div style={{ fontWeight: '600', fontSize: '1rem' }}>Gujarat, India (Serving Global Clients)</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ color: 'var(--accent-green)' }}><Mail size={22} /></div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>Email</div>
                      <a href="mailto:krunalparmar.odoo@gmail.com" style={{ color: 'var(--accent-green)', textDecoration: 'none', fontWeight: '600' }}>
                        krunalparmar.odoo@gmail.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <div style={{ 
              marginTop: '80px', 
              paddingTop: '30px', 
              borderTop: '1px solid var(--border-line)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
              color: 'var(--text-sub)'
            }}>
              <a href="https://github.com/krunalparmarodoodev" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}><GithubIcon size={20} /></a>
              <a href="mailto:krunalparmar.odoo@gmail.com" style={{ color: 'inherit' }}><Mail size={20} /></a>
              <a href="#about" style={{ color: 'inherit' }}><LinkedinIcon size={20} /></a>
              <a href="#home" style={{ color: 'inherit' }}><TwitterIcon size={20} /></a>
            </div>
          </section>
        </>
      )}

      {/* VIEW 2: DEDICATED 26-PROJECT BENTO ARCHIVE PAGE */}
      {currentPage === 'portfolio-deep' && (
        <section style={{ padding: '120px 60px 80px 60px', maxWidth: '1360px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '36px' }}>
            <button 
              onClick={() => setCurrentPage('home')}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--accent-green)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '16px'
              }}
            >
              <ArrowLeft size={18} /> Back to Main Portfolio
            </button>
            
            <h1 style={{ fontSize: '3rem', fontWeight: '900', letterSpacing: '-0.03em', marginBottom: '12px' }}>
              26 Enterprise Odoo Implementations & Case Studies
            </h1>
            <p style={{ color: 'var(--text-sub)', fontSize: '1.15rem', maxWidth: '850px', lineHeight: '1.6' }}>
              Full-spectrum production deliverables spanning <strong>v10 through v20 (Community & Enterprise)</strong>. Filter by version era or functional module domain.
            </p>
          </div>

          {/* Interactive Version Matrix Filters */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <Filter size={18} color="var(--accent-green)" />
              <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>Filter by Version:</span>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
              {versionFilters.map(v => (
                <button
                  key={v}
                  onClick={() => setSelectedVersion(v)}
                  style={{
                    backgroundColor: selectedVersion === v ? 'var(--accent-green)' : 'var(--bg-surface)',
                    color: selectedVersion === v ? '#fff' : 'var(--text-sub)',
                    border: '1px solid ' + (selectedVersion === v ? 'var(--accent-green)' : 'var(--border-line)'),
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {v}
                </button>
              ))}
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categoryFilters.map(c => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  style={{
                    backgroundColor: selectedCategory === c ? 'rgba(255,255,255,0.15)' : 'transparent',
                    color: selectedCategory === c ? '#fff' : 'var(--text-sub)',
                    border: '1px solid var(--border-line)',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: '500'
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* 2-Column Colored Bento Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
            gap: '24px',
            marginBottom: '60px'
          }}>
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="project-card"
                style={{ backgroundColor: project.color }}
                onClick={() => setSelectedProject(project)}
              >
                <div style={{ maxWidth: '65%' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ 
                      background: 'rgba(0,0,0,0.3)', 
                      padding: '2px 8px', 
                      borderRadius: '4px', 
                      fontSize: '0.75rem', 
                      fontWeight: '700', 
                      color: '#fff' 
                    }}>
                      {project.version}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>
                      {project.category}
                    </span>
                  </div>

                  <div style={{ fontStyle: 'italic', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.88)', marginBottom: '8px' }}>
                    {project.tech}
                  </div>
                  <h3 style={{ fontSize: '1.9rem', fontWeight: '800', lineHeight: '1.2', color: '#ffffff', marginBottom: '14px' }}>
                    {project.title}
                  </h3>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '700', fontSize: '0.92rem', color: '#ffffff' }}>
                    View Functional Story & Result &rarr;
                  </div>
                </div>

                <div 
                  className="laptop-mockup"
                  style={{
                    position: 'absolute',
                    right: '-10px',
                    bottom: '-10px',
                    width: '210px',
                    height: '140px',
                    backgroundColor: '#1a1a1a',
                    borderRadius: '10px 10px 0 0',
                    border: '6px solid #2d3748',
                    borderBottom: '10px solid #4a5568',
                    boxShadow: '-10px 15px 30px rgba(0,0,0,0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ background: '#2d3748', height: '14px', display: 'flex', alignItems: 'center', padding: '0 6px', gap: '4px' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#ff5f56' }} />
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#27c93f' }} />
                  </div>
                  <div style={{ flex: 1, backgroundColor: '#0d1117', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: '0.62rem', color: 'var(--accent-green)', fontFamily: 'monospace' }}>
                      odoo-bin -d enterprise
                    </div>
                    <div style={{ fontSize: '0.52rem', color: '#8b949e', fontFamily: 'monospace', marginTop: '4px' }}>
                      ✔ Modules loaded: OK
                    </div>
                    <div style={{ fontSize: '0.52rem', color: '#8b949e', fontFamily: 'monospace' }}>
                      ✔ Ledger sync: 100%
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <button 
              onClick={() => setCurrentPage('home')} 
              className="btn-green"
              style={{ cursor: 'pointer' }}
            >
              &larr; Back to Main Profile
            </button>
          </div>

        </section>
      )}

      {/* Case Study Modal Popup with Humanized Functional Delivery Story */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.88)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }} onClick={() => setSelectedProject(null)}>
          
          <div 
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '14px',
              maxWidth: '720px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '36px',
              position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-sub)',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ color: 'var(--accent-green)', fontWeight: '700', fontSize: '0.88rem' }}>
                {selectedProject.version}
              </span>
              <span style={{ color: 'var(--text-sub)', fontSize: '0.85rem' }}>
                • {selectedProject.edition || 'Community & Enterprise'}
              </span>
            </div>
            
            <h3 style={{ fontSize: '1.9rem', fontWeight: '800', marginBottom: '8px' }}>
              {selectedProject.title}
            </h3>
            <div style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginBottom: '20px' }}>
              {selectedProject.tech}
            </div>

            {/* The Real Business Problem */}
            <div style={{ backgroundColor: 'var(--bg-main)', padding: '16px', borderRadius: '8px', marginBottom: '14px' }}>
              <div style={{ fontWeight: '700', color: '#ff6b6b', marginBottom: '4px', fontSize: '0.9rem' }}>The Business Challenge:</div>
              <div style={{ color: 'var(--text-sub)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                {selectedProject.problem}
              </div>
            </div>

            {/* Humanized Functional Delivery Story */}
            <div style={{ backgroundColor: 'var(--bg-main)', padding: '16px', borderRadius: '8px', marginBottom: '14px', borderLeft: '3px solid var(--accent-green)' }}>
              <div style={{ fontWeight: '700', color: 'var(--accent-green)', marginBottom: '4px', fontSize: '0.9rem' }}>How We Delivered the Functional Solution:</div>
              <div style={{ color: '#e2e8f0', fontSize: '0.92rem', lineHeight: '1.6' }}>
                {selectedProject.functionalStory}
              </div>
            </div>

            {/* Quantified Business Impact */}
            {selectedProject.impact && (
              <div style={{ backgroundColor: 'var(--bg-main)', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
                <div style={{ fontWeight: '700', color: '#00d2ff', marginBottom: '4px', fontSize: '0.9rem' }}>Measurable Business Result:</div>
                <div style={{ color: 'var(--text-sub)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  {selectedProject.impact}
                </div>
              </div>
            )}

            <a 
              href={`mailto:krunalparmar.odoo@gmail.com?subject=Inquiry%20Regarding%20${encodeURIComponent(selectedProject.title)}`} 
              className="btn-green"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Discuss a Similar Solution For Your Project &rarr;
            </a>

          </div>

        </div>
      )}

    </div>
  );
}
