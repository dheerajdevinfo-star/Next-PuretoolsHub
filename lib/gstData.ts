export type GstType = "gst" | "reverse-gst" | "gst-invoice" | "hsn-code"

export const gstConfig = {

  gst: {
    gstTypeKey: "gst" as GstType,
    title: "GST Calculator",
    description: "Calculate GST amount instantly — add or remove GST from any price under any slab rate, completely free.",
    metaTitle: "GST Calculator – Calculate GST Amount Online Free",
    metaDescription: "Calculate GST amount instantly with our free calculator. Add or remove GST from any amount and find the exact tax payable under different GST slab rates.",
    gstRates: [0, 5, 12, 18, 28],
    defaultRate: 18,
    defaultAmount: 10000,
    minAmount: 1,
    maxAmount: 10000000,
    stepAmount: 100,
    content: [
      {
        heading: "How to Use the GST Calculator",
        body: `<p>Calculating GST takes less than a minute:</p>
      <ol>
        <li>Enter the <strong>original amount</strong> — either the base price (exclusive of GST) or the final price (inclusive of GST).</li>
        <li>Select the applicable <strong>GST rate</strong> — 5%, 12%, 18%, or 28%.</li>
        <li>Select whether you want to <strong>add GST</strong> (calculate GST on base price) or <strong>remove GST</strong> (extract GST from final price).</li>
        <li>Click <strong>Calculate</strong> to instantly see the GST amount, CGST, SGST or IGST breakup, and the final price.</li>
      </ol>
      <p>The calculator handles both GST-exclusive and GST-inclusive calculations, making it useful for buyers, sellers, and businesses alike.</p>`
      },
      {
        heading: "What is GST?",
        body: `<p><strong>GST (Goods and Services Tax)</strong> is a comprehensive, multi-stage, destination-based indirect tax that replaced multiple cascading taxes in India on 1st July 2017. It is levied on the supply of goods and services across the country, with the tax revenue shared between the central and state governments.</p>
      <p>GST is designed to eliminate the tax-on-tax effect of the previous indirect tax system, creating a unified national market. Every business with annual turnover above the GST registration threshold is required to collect GST from customers and remit it to the government.</p>`
      },
      {
        heading: "GST Calculation Formula",
        body: `<p>GST calculation depends on whether you are adding GST to a base price or extracting it from an inclusive price:</p>
      <p><strong>Adding GST to base price (GST Exclusive):</strong></p>
      <p class="formula">GST Amount = Base Price × (GST Rate ÷ 100)</p>
      <p class="formula">Final Price = Base Price + GST Amount</p>
      <p><strong>Removing GST from final price (GST Inclusive):</strong></p>
      <p class="formula">GST Amount = Final Price − (Final Price × 100 ÷ (100 + GST Rate))</p>
      <p class="formula">Base Price = Final Price − GST Amount</p>
      <p>For example, if a product's base price is ₹1,000 and GST rate is 18%, the GST amount is ₹180 and the final price is ₹1,180. Conversely, if the final price is ₹1,180 at 18% GST, the base price is ₹1,000 and GST is ₹180.</p>`
      },
      {
        heading: "GST Slab Rates in India",
        body: `<p>GST in India is structured across four main rate slabs:</p>
      <ul>
        <li><strong>0% (Exempt)</strong> — Essential items like fresh vegetables, milk, eggs, bread, and educational services.</li>
        <li><strong>5%</strong> — Basic necessities like packaged food items, small restaurants, economy class air travel, and life-saving medicines.</li>
        <li><strong>12%</strong> — Processed food, business class air travel, mobile phones, and certain construction materials.</li>
        <li><strong>18%</strong> — Most goods and services including restaurants, IT services, telecom, financial services, and most manufactured goods.</li>
        <li><strong>28%</strong> — Luxury and demerit goods including automobiles, tobacco, aerated drinks, and high-end consumer durables.</li>
      </ul>
      <p>Note: GST rates are subject to revision by the GST Council. Always verify the latest applicable rate for your specific product or service category.</p>`
      },
      {
        heading: "Types of GST in India",
        body: `<p>GST in India is divided into three components based on the nature of the transaction:</p>
      <ol>
        <li><strong>CGST (Central GST)</strong> — Collected by the central government on intra-state (within the same state) transactions. Half of the applicable GST rate goes as CGST.</li>
        <li><strong>SGST (State GST)</strong> — Collected by the state government on intra-state transactions. The other half of the GST rate goes as SGST.</li>
        <li><strong>IGST (Integrated GST)</strong> — Collected by the central government on inter-state (between two different states) transactions and imports. The full GST rate applies as IGST.</li>
      </ol>
      <p>For example, on an 18% GST transaction within the same state, 9% is CGST and 9% is SGST. For an inter-state transaction, the full 18% is IGST.</p>`
      },
      {
        heading: "Why Use Our GST Calculator?",
        body: `<p>Our calculator helps businesses and individuals handle GST calculations accurately by allowing you to:</p>
      <ul>
        <li>Instantly calculate GST amount for any price and rate combination</li>
        <li>Get a clear breakup of CGST, SGST, and IGST components</li>
        <li>Calculate both GST-inclusive and GST-exclusive amounts</li>
        <li>Avoid manual calculation errors in invoices, purchases, and tax filings</li>
      </ul>`
      }
    ],

    keywords: [
      "GST calculator",
      "GST calculator online",
      "GST calculation India",
      "GST inclusive exclusive calculator",
      "GST amount calculator India",
    ],

    faqs: [
      {
        q: "What is GST?",
        a: "GST (Goods and Services Tax) is a comprehensive indirect tax levied on the supply of goods and services in India, replacing multiple cascading taxes. It was implemented on 1st July 2017 and is shared between the central and state governments."
      },
      {
        q: "How is GST calculated?",
        a: "To add GST: GST Amount = Base Price × (GST Rate ÷ 100). To remove GST from an inclusive price: GST Amount = Final Price − (Final Price × 100 ÷ (100 + GST Rate))."
      },
      {
        q: "What are the GST slab rates in India?",
        a: "GST in India has four main slabs — 5% for basic necessities, 12% for processed goods, 18% for most goods and services, and 28% for luxury and demerit goods. Essential items are exempt at 0%."
      },
      {
        q: "What is the difference between CGST, SGST, and IGST?",
        a: "CGST and SGST are collected equally on intra-state transactions by the central and state governments respectively. IGST is collected by the central government on inter-state transactions at the full applicable GST rate."
      },
      {
        q: "Who needs to register for GST?",
        a: "Businesses with annual turnover exceeding ₹40 lakh (₹20 lakh for service providers and special category states) must register for GST. E-commerce operators and businesses making inter-state supplies must register regardless of turnover."
      },
    ],

    relatedTools: [
      { label: "Reverse GST Calculator", href: "/finance/gst/reverse-gst", description: 'Extract base price from GST inclusive amount' },
      { label: "GST Invoice Generator", href: "/finance/gst/gst-invoice", description: 'Generate GST compliant invoices instantly' },
      { label: "HSN Code Finder", href: "/finance/gst/hsn-code", description: "Find HSN code and GST rate for any product" },
    ],
  },

  "reverse-gst": {
    gstTypeKey: "reverse-gst" as GstType,
    title: "Reverse GST Calculator",
    description: "Extract the base price and GST amount from any GST-inclusive price instantly — completely free.",

    metaTitle: "Reverse GST Calculator – Remove GST From Price Online Free",
    metaDescription: "Calculate the base price by removing GST from any amount instantly with our free reverse GST calculator. Extract exact GST amount from GST inclusive prices.",
    gstRates: [5, 12, 18, 28],
    defaultRate: 18,
    defaultAmount: 11800,
    minAmount: 1,
    maxAmount: 10000000,
    stepAmount: 100,
    content: [
      {
        heading: "How to Use the Reverse GST Calculator",
        body: `<p>Calculating the base price after removing GST takes less than a minute:</p>
      <ol>
        <li>Enter the <strong>GST inclusive price</strong> — the final amount that already includes GST.</li>
        <li>Select the applicable <strong>GST rate</strong> — 5%, 12%, 18%, or 28%.</li>
        <li>Click <strong>Calculate</strong> to instantly see the original base price before GST, the exact GST amount, and the CGST and SGST or IGST breakup.</li>
      </ol>
      <p>The calculator accurately extracts the GST component from any GST-inclusive amount, helping you verify invoices and understand the true pre-tax cost of any purchase.</p>`
      },
      {
        heading: "What is Reverse GST Calculation?",
        body: `<p><strong>Reverse GST calculation</strong> is the process of working backwards from a GST-inclusive final price to find the original base price before GST was applied, along with the exact GST amount embedded in the price.</p>
      <p>This is commonly needed when you receive an invoice showing only the total amount including GST, and you need to separate the base price and tax component for accounting, expense reporting, or input tax credit (ITC) purposes.</p>`
      },
      {
        heading: "Reverse GST Calculation Formula",
        body: `<p>The reverse GST formula to extract base price and GST from an inclusive amount is:</p>
      <p class="formula">Base Price = GST Inclusive Price × 100 ÷ (100 + GST Rate)</p>
      <p class="formula">GST Amount = GST Inclusive Price − Base Price</p>
      <p><strong>For CGST and SGST breakup (intra-state):</strong></p>
      <ul>
        <li>CGST = GST Amount ÷ 2</li>
        <li>SGST = GST Amount ÷ 2</li>
      </ul>
      <p>For example, if you paid ₹1,180 for a product at 18% GST:</p>
      <ul>
        <li>Base Price = ₹1,180 × 100 ÷ 118 = <strong>₹1,000</strong></li>
        <li>GST Amount = ₹1,180 − ₹1,000 = <strong>₹180</strong></li>
        <li>CGST = ₹90, SGST = ₹90</li>
      </ul>`
      },
      {
        heading: "When is Reverse GST Calculation Used?",
        body: `<p>Reverse GST calculation is commonly needed in the following situations:</p>
      <ol>
        <li><strong>Expense reporting</strong> — When employees submit expense claims with GST-inclusive receipts, the base amount needs to be separated for accounting purposes.</li>
        <li><strong>Input Tax Credit (ITC)</strong> — Businesses need to identify the exact GST component on purchases to claim ITC in their GST returns.</li>
        <li><strong>Invoice verification</strong> — Verify that the GST charged on a received invoice is correct by reverse calculating from the total amount.</li>
        <li><strong>Price analysis</strong> — Understand the true pre-tax cost of a product or service when only the GST-inclusive MRP is displayed.</li>
        <li><strong>Accounting entries</strong> — Separate the base amount and tax component for accurate bookkeeping and financial records.</li>
      </ol>`
      },
      {
        heading: "Reverse GST vs Forward GST Calculation",
        body: `<p>Understanding the difference between the two types of GST calculations:</p>
      <ul>
        <li><strong>Forward GST Calculation</strong> — You start with the base price and add GST to arrive at the final price. Used when quoting prices to customers or preparing sales invoices.</li>
        <li><strong>Reverse GST Calculation</strong> — You start with the final GST-inclusive price and work backwards to find the base price and GST amount. Used when verifying purchases, claiming ITC, or analyzing costs.</li>
      </ul>
      <p>Both calculations use the same GST rate but apply different formulas to arrive at the result. Our calculator handles both — simply select whether you want to add or remove GST from the amount.</p>`
      },
      {
        heading: "Why Use Our Reverse GST Calculator?",
        body: `<p>Our calculator helps businesses and individuals handle reverse GST calculations accurately by allowing you to:</p>
      <ul>
        <li>Instantly extract the exact base price and GST from any inclusive amount</li>
        <li>Get a clear CGST and SGST or IGST breakup for accounting purposes</li>
        <li>Verify GST amounts on received invoices quickly and accurately</li>
        <li>Avoid manual calculation errors when processing purchase invoices or expense claims</li>
      </ul>`
      }
    ],

    keywords: [
      "reverse GST calculator",
      "GST reverse calculation",
      "remove GST calculator",
      "GST exclusive calculator",
      "extract GST from price calculator India",
    ],

    faqs: [
      {
        q: "What is reverse GST calculation?",
        a: "Reverse GST calculation is the process of extracting the original base price and GST amount from a GST-inclusive final price, using the formula: Base Price = Inclusive Price × 100 ÷ (100 + GST Rate)."
      },
      {
        q: "How do I remove GST from a price?",
        a: "To remove GST from an inclusive price, use the formula: Base Price = GST Inclusive Price × 100 ÷ (100 + GST Rate). The GST amount is then the difference between the inclusive price and the base price."
      },
      {
        q: "Why do I need reverse GST calculation?",
        a: "Reverse GST calculation is needed for expense reporting, claiming input tax credit, verifying invoices, and separating base price from tax component for accounting and bookkeeping purposes."
      },
      {
        q: "Is the reverse GST formula the same for all GST rates?",
        a: "Yes, the same formula applies for all GST rates — Base Price = Inclusive Price × 100 ÷ (100 + GST Rate). Only the GST rate value changes depending on the applicable slab (5%, 12%, 18%, or 28%)."
      },
      {
        q: "What is the difference between CGST, SGST, and IGST in reverse calculation?",
        a: "For intra-state transactions, the extracted GST amount is split equally into CGST and SGST. For inter-state transactions, the full GST amount is IGST with no CGST or SGST component."
      },
    ],

    relatedTools: [
      { label: "GST Calculator", href: "/finance/gst", description: 'Add GST to any base price instantly' },
      { label: "GST Invoice Generator", href: "/finance/gst/gst-invoice", description: 'Generate GST compliant invoices instantly' },
      { label: "HSN Code Finder", href: "/finance/gst/hsn-code", description: "Find HSN code and GST rate for any product" },
    ],
  },

  "gst-invoice": {
    gstTypeKey: "gst-invoice" as GstType,
    title: "GST Invoice Generator",
    description: "Create GST compliant invoices instantly with automatic tax calculation — completely free.",

    metaTitle: "GST Invoice Generator – Create GST Invoice Online Free",
    metaDescription: "Generate GST compliant invoices instantly with our free tool. Create professional GST invoices with automatic tax calculation for any business or freelancer.",

    gstRates: [0, 5, 12, 18, 28],
    defaultRate: 18,
    defaultAmount: 10000,
    minAmount: 1,
    maxAmount: 10000000,
    stepAmount: 100,
    content: [
      {
        heading: "How to Use the GST Invoice Generator",
        body: `<p>Creating a GST invoice takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>business details</strong> — name, address, GSTIN, and contact information.</li>
        <li>Enter your <strong>customer details</strong> — name, address, and GSTIN (if the customer is GST registered).</li>
        <li>Add <strong>invoice details</strong> — invoice number, date, and due date.</li>
        <li>Add <strong>line items</strong> — product or service description, HSN/SAC code, quantity, rate, and applicable GST rate.</li>
        <li>Click <strong>Generate</strong> to instantly create a professionally formatted, GST compliant invoice ready to print or download as PDF.</li>
      </ol>
      <p>The generator automatically calculates CGST, SGST, or IGST based on whether the transaction is intra-state or inter-state, and computes the total amount payable.</p>`
      },
      {
        heading: "What is a GST Invoice?",
        body: `<p>A <strong>GST invoice</strong> is a document issued by a GST-registered supplier to the buyer at the time of sale of goods or provision of services. It is the primary document for GST compliance, serving as proof of the supply made and the GST charged on it.</p>
      <p>A valid GST invoice is essential for the buyer to claim <strong>Input Tax Credit (ITC)</strong> on purchases, making it a critical document for businesses. Without a proper GST invoice, the buyer cannot offset the GST paid on purchases against the GST collected on sales.</p>`
      },
      {
        heading: "Mandatory Fields on a GST Invoice",
        body: `<p>As per GST rules, a valid tax invoice must contain the following mandatory information:</p>
      <ul>
        <li><strong>Supplier details</strong> — Name, address, and GSTIN of the supplier.</li>
        <li><strong>Invoice number</strong> — A unique, consecutive serial number for the financial year.</li>
        <li><strong>Invoice date</strong> — The date on which the invoice is issued.</li>
        <li><strong>Recipient details</strong> — Name, address, and GSTIN of the buyer (for B2B transactions).</li>
        <li><strong>HSN or SAC code</strong> — Harmonized System of Nomenclature code for goods or Service Accounting Code for services.</li>
        <li><strong>Description of goods or services</strong> — Clear description of what is being supplied.</li>
        <li><strong>Quantity and unit</strong> — For goods, the quantity and unit of measurement.</li>
        <li><strong>Taxable value</strong> — The base price before GST.</li>
        <li><strong>GST rate and amount</strong> — Applicable GST rate and the CGST, SGST, or IGST amounts separately.</li>
        <li><strong>Total invoice value</strong> — The final amount including GST.</li>
        <li><strong>Place of supply</strong> — State of supply, determining whether CGST + SGST or IGST applies.</li>
      </ul>`
      },
      {
        heading: "Types of GST Invoices",
        body: `<p>Different types of GST documents are used for different situations:</p>
      <ol>
        <li><strong>Tax Invoice</strong> — Issued by GST-registered suppliers for taxable supplies. The buyer can claim ITC based on this document.</li>
        <li><strong>Bill of Supply</strong> — Issued instead of a tax invoice for exempt supplies or by composition scheme dealers, where GST is not separately charged.</li>
        <li><strong>Credit Note</strong> — Issued when the original invoice amount needs to be reduced due to returns, discounts, or corrections after the original invoice was raised.</li>
        <li><strong>Debit Note</strong> — Issued when the original invoice amount needs to be increased due to additional charges or corrections.</li>
        <li><strong>Receipt Voucher</strong> — Issued when advance payment is received before the actual supply of goods or services.</li>
      </ol>`
      },
      {
        heading: "GST Invoice Rules and Compliance",
        body: `<p>Key compliance requirements for GST invoices:</p>
      <ul>
        <li><strong>Issuance timeline</strong> — Tax invoices for goods must be issued at or before delivery. For services, invoices must be issued within 30 days of supply (45 days for banking and financial services).</li>
        <li><strong>Invoice numbering</strong> — Invoice numbers must be consecutive and unique for each financial year, with no gaps or duplicates.</li>
        <li><strong>Number of copies</strong> — For goods, three copies are required (original for buyer, duplicate for transporter, triplicate for supplier). For services, two copies suffice.</li>
        <li><strong>Digital invoices</strong> — Electronic invoices are legally valid and accepted by the GST department, provided they contain all mandatory fields.</li>
        <li><strong>E-invoicing</strong> — Businesses above a specified annual turnover threshold are required to generate invoices through the government's Invoice Registration Portal (IRP) for e-invoicing compliance.</li>
      </ul>`
      },
      {
        heading: "Why Use Our GST Invoice Generator?",
        body: `<p>Our generator helps businesses and freelancers create compliant invoices quickly by allowing you to:</p>
      <ul>
        <li>Generate instant, professionally formatted GST invoices</li>
        <li>Automatically calculate CGST, SGST, and IGST based on transaction type</li>
        <li>Include all mandatory GST fields to ensure compliance</li>
        <li>Download invoices as PDF for sharing with customers or maintaining records</li>
      </ul>`
      }
    ],

    keywords: [
      "GST invoice generator",
      "GST invoice format online",
      "free GST invoice maker",
      "GST bill generator online",
      "GST invoice format India",
    ],

    faqs: [
      {
        q: "What is a GST invoice?",
        a: "A GST invoice is a document issued by a GST-registered supplier at the time of sale, detailing the goods or services supplied, taxable value, applicable GST rate, and tax amounts, enabling the buyer to claim Input Tax Credit."
      },
      {
        q: "Is a GST invoice mandatory for all sales?",
        a: "GST-registered businesses must issue a tax invoice for all taxable supplies. For exempt supplies or composition scheme dealers, a Bill of Supply is issued instead. Unregistered suppliers do not issue GST invoices."
      },
      {
        q: "What is an HSN code on a GST invoice?",
        a: "HSN (Harmonized System of Nomenclature) is a standardized code used to classify goods for GST purposes. It must be mentioned on invoices, with the number of digits required depending on the supplier's annual turnover."
      },
      {
        q: "Can I issue a GST invoice without GSTIN?",
        a: "No, only GST-registered businesses with a valid GSTIN can issue GST tax invoices. Unregistered businesses cannot charge GST or issue tax invoices, and must issue regular bills without any GST component."
      },
      {
        q: "What is the difference between CGST plus SGST and IGST on a GST invoice?",
        a: "CGST and SGST are charged on intra-state transactions, split equally at half the applicable GST rate each. IGST is charged on inter-state transactions at the full applicable GST rate, with no CGST or SGST component."
      },
    ],

    relatedTools: [
      { label: "GST Calculator", href: "/finance/gst", description: 'Calculate GST amount on any price' },
      { label: "Reverse GST Calculator", href: "/finance/gst/reverse-gst", description: 'Extract base price from GST inclusive amount' },
      { label: "HSN Code Finder", href: "/finance/gst/hsn-code", description: "Find HSN code and GST rate for any product" },
    ],
  },

  "hsn-code": {
    gstTypeKey: "hsn-code" as GstType,
    title: "HSN Code Finder",
    description: "Find the correct HSN code and applicable GST rate for any product instantly — completely free.",

    metaTitle: "HSN Code Finder – Search HSN Code & GST Rate Online Free",
    metaDescription: "Find the correct HSN code and applicable GST rate for any product instantly with our free HSN code finder. Search from the complete HSN code list for GST compliance.",
    gstRates: [0, 5, 12, 18, 28],
    defaultRate: 18,
    defaultAmount: 10000,
    minAmount: 1,
    maxAmount: 10000000,
    stepAmount: 100,
    content: [
      {
        heading: "How to Use the HSN Code Finder",
        body: `<p>Finding the correct HSN code for your product takes less than a minute:</p>
      <ol>
        <li>Enter the <strong>product name or description</strong> in the search box.</li>
        <li>Browse the matching results showing the <strong>HSN code, product description, and applicable GST rate</strong>.</li>
        <li>Select the most accurate match for your specific product.</li>
        <li>Note the <strong>HSN code and GST rate</strong> to use on your invoices and GST returns.</li>
      </ol>
      <p>You can also search directly by entering a known HSN code to find the product category and applicable GST rate associated with it.</p>`
      },
      {
        heading: "What is an HSN Code?",
        body: `<p><strong>HSN (Harmonized System of Nomenclature)</strong> is an internationally standardized system for classifying goods, developed by the World Customs Organization (WCO) and used by over 200 countries for customs and trade purposes. In India, HSN codes are used under the GST system to classify goods and determine the applicable GST rate.</p>
      <p>HSN codes ensure uniformity in the classification of goods across different states and businesses, preventing disputes about applicable tax rates and simplifying GST compliance for businesses of all sizes.</p>`
      },
      {
        heading: "Structure of HSN Code",
        body: `<p>HSN codes follow a hierarchical structure with increasing specificity:</p>
      <ul>
        <li><strong>2-digit HSN</strong> — Represents the broad chapter or category of goods (e.g., Chapter 09 = Coffee, Tea, Mate, and Spices).</li>
        <li><strong>4-digit HSN</strong> — Represents a more specific heading within the chapter (e.g., 0902 = Tea).</li>
        <li><strong>6-digit HSN</strong> — Represents a sub-heading with further specificity (e.g., 090210 = Green Tea).</li>
        <li><strong>8-digit HSN</strong> — The most specific level, used for customs and import/export purposes.</li>
      </ul>
      <p>For GST purposes in India, businesses are required to mention HSN codes on invoices based on their annual turnover — 4-digit codes for turnover above ₹5 crore, and 6-digit codes for turnover above ₹50 crore.</p>`
      },
      {
        heading: "HSN Code Requirements Based on Turnover",
        body: `<p>The number of HSN code digits required on GST invoices depends on your annual turnover:</p>
      <ul>
        <li><strong>Annual turnover up to ₹5 crore</strong> — 4-digit HSN code is mandatory on B2B invoices. HSN code is optional on B2C invoices.</li>
        <li><strong>Annual turnover above ₹5 crore</strong> — 6-digit HSN code is mandatory on all invoices, both B2B and B2C.</li>
        <li><strong>Exporters and importers</strong> — 8-digit HSN code is mandatory on all export and import documents regardless of turnover.</li>
      </ul>
      <p>Note: GST rules regarding HSN code requirements are subject to revision. Always verify the latest requirements on the official GST portal (gst.gov.in) before filing your returns.</p>`
      },
      {
        heading: "What is SAC Code?",
        body: `<p>While HSN codes are used for goods, <strong>SAC (Service Accounting Code)</strong> is the equivalent classification system used for services under GST. All services supplied in India are classified under specific SAC codes that determine the applicable GST rate.</p>
      <ul>
        <li><strong>SAC codes</strong> are 6-digit codes starting with 99, distinguishing them from HSN codes for goods.</li>
        <li>Examples: 9961 = Retail trade services; 9971 = Financial and related services; 9983 = Other professional, technical, and business services.</li>
        <li>Like HSN codes, SAC codes must be mentioned on service invoices for GST compliance.</li>
      </ul>`
      },
      {
        heading: "Why Use Our HSN Code Finder?",
        body: `<p>Our tool helps businesses ensure GST compliance by allowing you to:</p>
      <ul>
        <li>Instantly find the correct HSN code for any product by name or description</li>
        <li>Verify the applicable GST rate for any HSN code to avoid incorrect tax charges</li>
        <li>Ensure your invoices and GST returns use accurate HSN codes for compliance</li>
        <li>Avoid penalties and notices from the GST department due to incorrect product classification</li>
      </ul>`
      }
    ],

    keywords: [
      "HSN code finder",
      "HSN code search",
      "HSN code list GST",
      "HSN code calculator",
      "HSN code and GST rate India",
    ],

    faqs: [
      {
        q: "What is an HSN code?",
        a: "HSN (Harmonized System of Nomenclature) is an internationally standardized system for classifying goods. Under GST in India, HSN codes are used on invoices to identify the product category and determine the applicable GST rate."
      },
      {
        q: "Is HSN code mandatory on GST invoices?",
        a: "Yes, HSN codes are mandatory on GST invoices. Businesses with turnover up to ₹5 crore must use 4-digit HSN codes on B2B invoices, while those above ₹5 crore must use 6-digit codes on all invoices."
      },
      {
        q: "How do I find the HSN code for my product?",
        a: "You can find the HSN code for your product by searching the product name on the GST portal (gst.gov.in), using our HSN code finder tool, or referring to the official HSN code schedule published by the CBIC."
      },
      {
        q: "What is the difference between HSN code and SAC code?",
        a: "HSN codes are used to classify goods under GST, while SAC (Service Accounting Code) is used to classify services. Both serve the same purpose of identifying the applicable GST rate for different products and services."
      },
      {
        q: "What happens if I use the wrong HSN code on my invoice?",
        a: "Using an incorrect HSN code can lead to GST notices, demands for differential tax, and penalties. It is important to verify the correct HSN code for each product to ensure accurate tax compliance and avoid legal complications."
      },
    ],

    relatedTools: [
      { label: "GST Calculator", href: "/finance/gst", description: 'Calculate GST amount on any price' },
      { label: "Reverse GST Calculator", href: "/finance/gst/reverse-gst", description: 'Extract base price from GST inclusive amount' },
      { label: "GST Invoice Generator", href: "/finance/gst/gst-invoice", description: "Generate GST compliant invoices instantly" },
    ],
  },
}

export const slugToGstType: Record<string, GstType> = {
  "reverse-gst": "reverse-gst",
  "gst-invoice": "gst-invoice",
  "hsn-code": "hsn-code",
}

export const validGstSlugs = Object.keys(slugToGstType)