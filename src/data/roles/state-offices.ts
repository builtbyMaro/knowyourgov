import type { RoleGuide } from './types';

const stateScope = 'These offices exist in Nigeria’s 36 states. The Federal Capital Territory has no elected Governor, Deputy Governor or State House of Assembly. FCT voters elect Area Council officials and federal lawmakers.';

export const stateOfficeGuides = {
  governor: {
    intro: 'The Governor leads the state executive. The Constitution requires the Governor to present the state budget, convene regular meetings with the Deputy Governor and commissioners, and respond to bills passed by the State House of Assembly.',
    scopeNote: stateScope,
    duties: [
      {
        title: 'Carry out state laws and coordinate the executive',
        paragraphs: [
          'The Governor is responsible for exercising the state’s executive authority under the Constitution. That includes carrying out state laws. The Governor must hold regular meetings with the Deputy Governor and all commissioners to set policy direction, coordinate their work and receive advice.',
          'When a state law gives a ministry responsibility for inspecting state facilities, that ministry carries out the inspections. The Governor leads the executive responsible for putting the law into effect.',
        ],
      },
      {
        title: 'Present the state budget before the financial year begins',
        paragraphs: [
          'The Governor must have estimates of state revenue and spending prepared and laid before the House of Assembly. The spending that requires legislative approval goes into an appropriation bill. Once enacted, the appropriation law authorises the state to spend money for the purposes it lists.',
          'If an approved amount is insufficient, or a spending need arises for which the budget provided nothing, the Constitution requires supplementary estimates to be laid before the House and the relevant spending heads to be included in a supplementary appropriation bill.',
        ],
      },
      {
        title: 'Nominate commissioners for legislative confirmation',
        paragraphs: [
          'The Governor must submit the names of initial commissioner nominees to the House of Assembly for confirmation within 60 days of taking the oath of office. Further appointments during the term are also subject to the confirmation process. The Constitution treats an appointment as made if the House sends no response within 21 working days of receiving the nomination.',
          'For example, the Governor selects a nominee for Commissioner for Health. The Assembly handles confirmation. The Constitution requires evidence that a nominee declared their assets and liabilities before the Assembly confirms them.',
        ],
      },
      {
        title: 'Respond to bills within 30 days',
        paragraphs: [
          'When the House of Assembly presents a bill it has passed, the Governor must indicate within 30 days whether they assent to it or withhold assent. Withholding assent is a choice. Responding within the deadline is the duty.',
          'If the Governor withholds assent, the House has the power to pass the bill again by a two-thirds majority. If it does so, the bill becomes law without the Governor’s assent.',
        ],
      },
      {
        title: 'Declare assets and take the required oaths',
        paragraphs: [
          'Before performing the functions of office, an elected Governor must declare assets and liabilities and then take the Oath of Allegiance and the oath of office. The Code of Conduct also requires asset declarations at the end of every four years and at the end of the term.',
        ],
      },
      {
        title: 'Put a temporary handover in writing',
        paragraphs: [
          'When proceeding on vacation or otherwise unable to perform the functions of office, the Governor must send a written declaration to the Speaker of the House of Assembly. The Deputy Governor then performs those functions as Acting Governor until the Governor sends a written notice of return.',
          'If the Governor is unable or fails to send that declaration within 21 days, the Assembly is required to mandate the Deputy Governor to act by a simple-majority resolution.',
        ],
      },
    ],
    limits: [
      { title: 'State spending needs legal authority', text: 'A press announcement or instruction from the Governor is insufficient to withdraw state funds. The Constitution requires legal authority for withdrawals, including the appropriation process for ordinary budget spending.' },
      { title: 'The House of Assembly passes state bills', text: 'The Governor’s part in passing a state law is to assent or withhold assent after the House passes the bill. The House retains its constitutional power to override a refusal.' },
      { title: 'The courts decide cases independently', text: 'State executive authority belongs to the Governor and judicial authority belongs to the courts. A person challenging a state decision seeks a ruling from the relevant court.' },
      { title: 'The office covers state responsibilities', text: 'The Governor leads state ministries and agencies. Federal agencies and elected councils have powers and duties of their own. Check the authority responsible for a project before holding an office to account for its delivery.' },
    ],
    examples: [
      { title: 'A state-owned hospital needs new equipment', text: 'Look for the proposed purchase in the state budget. Check whether the House approved it and ask the responsible ministry or hospital for purchasing and delivery records. Each step tells you something different about the project’s progress.' },
      { title: 'A state road has been announced for repairs', text: 'Check that it is a state road and identify the ministry or agency responsible. Compare the budget allocation with the contract and evidence of work done.' },
      { title: 'The state announces a new rule', text: 'Ask for the law or regulation behind the announcement. If the change needs a new state law, the House must pass the bill and the assent or override process must follow.' },
    ],
    election: {
      represents: 'The whole state. For the governorship election, the state is treated as one constituency.',
      selection: 'Voters choose a Governor and Deputy Governor on a joint ticket in an election conducted by the Independent National Electoral Commission (INEC).',
      tenure: 'The ordinary term is four years. The Constitution bars a person already elected Governor twice from being elected to that office again.',
      details: [
        'In a contested first round, the candidate with the highest statewide vote total also needs at least 25% of the votes in each of at least two-thirds of the state’s local government areas. The Constitution sets further election steps if the result fails to produce a winner.',
        'A person sworn in as Governor to complete another elected Governor’s term may subsequently be elected Governor for only one term.',
      ],
    },
    accountability: [
      'Compare the Governor’s proposed budget with the enacted appropriation law and available reports on actual spending.',
      'Check Assembly records for the date a bill went to the Governor and the action recorded on it.',
      'Look at nominee submissions and confirmation records to see who was proposed and when.',
    ],
    related: ['deputy-governor', 'state-house-of-assembly-member', 'local-government-chairman'],
  },
  'deputy-governor': {
    intro: 'The Deputy Governor chairs the State Boundary Committee and must carry out the Governor’s functions when the constitutional rules for an Acting Governor apply. Other executive work depends on the responsibilities the Governor assigns.',
    scopeNote: stateScope,
    duties: [
      {
        title: 'Chair the State Boundary Committee',
        paragraphs: [
          'The National Boundary Commission (Establishment) Act makes the Deputy Governor the chair of the State Boundary Committee. The committee must meet at least quarterly. Its duties include dealing with boundary disputes within and between local government areas, monitoring local boundary committees and working with neighbouring states on shared boundary issues.',
          'If two councils disagree over their boundary, the committee is responsible for considering the dispute and using the relevant boundary documents. The Deputy Governor chairs that work and brings the relevant state officials together through the committee.',
        ],
      },
      {
        title: 'Perform the Governor’s functions during a temporary handover',
        paragraphs: [
          'When the Governor sends a written declaration to the Speaker that they are going on vacation or are unable to serve, the Deputy Governor must perform the Governor’s functions as Acting Governor. The temporary arrangement ends when the Governor writes to the Speaker to say they are available to resume.',
          'If the Governor is unable or fails to send the first declaration within 21 days, the House of Assembly must mandate the Deputy Governor to act by a simple-majority resolution. The declaration or resolution establishes who is exercising the Governor’s functions.',
        ],
      },
      {
        title: 'Take office if the governorship becomes vacant',
        paragraphs: [
          'If the Governor’s office becomes vacant through death, resignation or removal under the Constitution, including permanent incapacity established through the constitutional process, the Deputy Governor is required to take office as Governor. This is succession to the office. A temporary handover leaves the Governor in office.',
        ],
      },
      {
        title: 'Carry out state executive work assigned by the Governor',
        paragraphs: [
          'The Governor has discretion to assign the Deputy Governor state government business, including responsibility for administering a department. When such an assignment is made, it defines the Deputy Governor’s responsibilities for that work. The Constitution requires the Governor to hold regular meetings with the Deputy Governor and commissioners to coordinate their executive responsibilities.',
          'If the Deputy Governor is assigned to coordinate a state flood response, check the assignment and the state agencies responsible for field operations, relief purchases and payments. Those assignments can differ between states and administrations.',
        ],
      },
      {
        title: 'Declare assets and take the required oaths',
        paragraphs: [
          'The same constitutional rules on asset and liability declarations and oaths apply to the Deputy Governor as to the Governor. The Deputy Governor must declare assets and liabilities and take the required oaths before performing the functions of office.',
        ],
      },
    ],
    limits: [
      { title: 'Each office has its own authority', text: 'Election as Deputy Governor does not by itself transfer the Governor’s powers. The Deputy Governor acts within duties set by law, duties assigned by the Governor and powers transferred under the constitutional handover rules.' },
      { title: 'Portfolios depend on the assignment', text: 'One Deputy Governor may be given responsibility for a state programme that another state places with a commissioner. Check the specific state’s published assignment before judging who is accountable for a programme.' },
      { title: 'The boundary committee acts under legal procedures', text: 'The Deputy Governor chairs a committee that handles disputes using applicable boundary records. Changing a local government boundary is governed by constitutional procedures involving other institutions.' },
    ],
    examples: [
      { title: 'Two local government areas disagree about a boundary', text: 'Ask whether the local boundary committees have referred the matter to the State Boundary Committee. See whether the state committee convened, identified the relevant survey documents and recorded the next step.' },
      { title: 'The Governor is temporarily unable to serve', text: 'Look for the declaration sent to the Speaker or an Assembly resolution. Either document helps identify when the Deputy Governor assumes the functions of Acting Governor.' },
      { title: 'A project is announced by the Deputy Governor', text: 'Check the assignment, budget and agency responsible for delivery. This helps identify who is accountable for coordination and who is responsible for the work itself.' },
    ],
    election: {
      represents: 'The whole state as the running mate on the governorship ticket.',
      selection: 'The governorship candidate nominates a running mate. Voters choose one ticket, and the running mate is elected Deputy Governor when the candidate is elected Governor.',
      tenure: 'The ordinary term is four years alongside the Governor, subject to the Constitution’s rules on vacancies and succession.',
      details: ['If the office of Deputy Governor becomes vacant during the term, the Governor nominates and appoints a replacement with approval from the House of Assembly.'],
    },
    accountability: [
      'Check what responsibilities the Governor assigned to the Deputy Governor and which agencies are charged with delivery.',
      'Ask the State Boundary Committee for meeting and referral information on a boundary matter, where records are available.',
      'Follow Assembly proceedings and written notices to the Speaker when there is a temporary handover or a vacancy.',
    ],
    related: ['governor', 'state-house-of-assembly-member', 'local-government-vice-chairman'],
  },
  'state-house-of-assembly-member': {
    intro: 'A member represents a state constituency in the State House of Assembly. The member must meet the oath, asset declaration, attendance and conflict-of-interest rules. The House makes state laws and authorises ordinary state spending through collective decisions.',
    scopeNote: stateScope,
    duties: [
      {
        title: 'Declare assets and take the membership oaths',
        paragraphs: [
          'Before taking their seat, a member must declare assets and liabilities and take the Oath of Allegiance and the oath of membership before the Speaker. The Constitution permits a member to participate in electing the Speaker and Deputy Speaker before taking the oaths.',
        ],
      },
      {
        title: 'Attend sittings and declare financial interests',
        paragraphs: [
          'A member must vacate their seat if, without just cause, they miss more than one-third of the days the House meets in a year, once the required evidence has been presented and the Speaker gives effect to the rule. The House itself is required to sit at least 181 days a year. The sitting requirement is for the chamber, while the absence rule applies to individual members.',
          'House rules must require members to declare any direct financial interest in a matter before the House. The House may decide whether a member who discloses an interest can participate or vote. A member who gives notice that they will stay out of both debate and voting, and then does so, is exempt from that disclosure under this rule.',
        ],
      },
      {
        title: 'Make state laws through the House',
        paragraphs: [
          'State legislative power belongs to the House of Assembly. A member’s work includes considering bills, proposing amendments and taking part in votes under the House’s rules. The Constitution requires the House to present a bill it passes to the Governor for assent. A vote by one member does not enact a law.',
          'For example, a member considering a bill on state planning rules can question proposals and suggest changes. The House votes on the bill and, if it passes, sends it to the Governor. The lawmaking process also provides for the House to override withheld assent by a two-thirds majority.',
        ],
      },
      {
        title: 'Authorise ordinary state spending and consider audit reports',
        paragraphs: [
          'The Governor presents the spending estimates. The House considers the appropriation bill that, once enacted, provides legal authority for ordinary spending. The Constitution also requires the House to have its public accounts committee consider the state Auditor-General’s report.',
          'For a hospital project, the House can question why funds are requested. When spending has taken place, the public accounts committee reviews audit findings. Those are separate steps from procuring equipment or carrying out construction, which are responsibilities of the executive and its agencies.',
        ],
      },
      {
        title: 'Apply the legal rules when examining commissioner nominees',
        paragraphs: [
          'The House handles confirmation of state commissioner nominees. Before confirming a nominee, the House must receive evidence of the nominee’s required asset and liability declaration. The confirmation decision belongs to the House, and appointment belongs to the Governor. The Constitution treats an appointment as made if the House sends no response within 21 working days of receiving the nomination.',
        ],
      },
    ],
    limits: [
      { title: 'The House acts collectively', text: 'A single member cannot pass a bill, approve a budget, confirm a commissioner or remove a Governor. Each requires action by the appropriate body under its constitutional rules.' },
      { title: 'The executive delivers state services', text: 'A member helps authorise spending and hold the government to account. The responsible ministry or agency administers the programme, awards contracts under the applicable rules and delivers the service.' },
      { title: 'Investigations belong to the House or an authorised committee', text: 'The Constitution gives the House formal inquiry powers for specified purposes, including examining how it makes laws and exposing failures in the administration of laws or public funds. The power is held by the House and used through its procedures.' },
      { title: 'State laws must stay within state legislative powers', text: 'The Constitution allocates certain subjects, such as immigration, to the federal legislature. A state assembly makes laws in the areas the Constitution assigns to it.' },
    ],
    examples: [
      { title: 'Rehabilitation of a state school appears in the budget', text: 'Ask how your member handled the proposal during budget consideration. If the spending was approved, the responsible agency can explain the contract and timeline. Assembly records and audit findings show how lawmakers followed up.' },
      { title: 'A bill would change state planning rules', text: 'Follow the bill through the Assembly and ask your member what changes they supported. If the House approves it, check the Governor’s response or any subsequent override vote.' },
      { title: 'An auditor flags an unexplained payment', text: 'Check how the Assembly’s public accounts committee dealt with the finding. Look for requests for records, a hearing or a report, where those records are public.' },
    ],
    election: {
      represents: 'One state constituency in the State House of Assembly. State constituencies are distinct from the federal constituencies used for House of Representatives elections.',
      selection: 'Registered voters in the constituency elect their member directly in an election conducted by INEC.',
      tenure: 'A House ordinarily lasts four years from its first sitting. If a member wins a by-election, they fill the seat for the remaining life of the House.',
      details: ['The Constitution provides for recall. It requires a petition signed by more than half of the registered voters in the constituency, verification by INEC and approval in an INEC referendum under the constitutional rules.'],
    },
    accountability: [
      'Use your state constituency when looking up your member. A federal constituency or a ward may point you to a different office.',
      'Ask for sitting records, votes and proceedings, and committee reports where available. Check how the member participated in a specific decision.',
      'Compare promises about a service with the enacted law or budget and the agency’s delivery records. This identifies what the Assembly decided and what the executive delivered.',
    ],
    related: ['governor', 'deputy-governor', 'house-of-representatives-member', 'ward-councillor'],
  },
} satisfies Record<string, RoleGuide>;
