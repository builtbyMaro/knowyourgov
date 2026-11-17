import type { RoleGuide } from './types';

const localScope = 'The Constitution gives local councils a common set of functions. Many duties, terms and procedures for individual officeholders depend on the applicable state or Federal Capital Territory (FCT) law. The Kaduna and FCT examples here identify which rules apply where.';

const publicOfficeDuty = 'The Constitution’s Code of Conduct requires public officers to declare assets and liabilities on taking office, at the end of every four years in office, and at the end of their term. They must keep their private interests from conflicting with their public duties.';

const fctCouncilTerm = 'In the FCT, the Area Council dissolves after four years, counted from the chair’s oath of office or the inauguration of the legislative arm, whichever came first. For a state LGA, check the rules governing that council’s term.';

export const localOfficeGuides = {
  'local-government-chairman': {
    intro: 'The Local Government Chairman leads the executive side of the council. This is the office to ask who is responsible for delivering council services, how approved work is being carried out, and what the council has spent.',
    scopeNote: localScope,
    duties: [
      {
        title: 'Run the council’s administration',
        paragraphs: [
          'The Fourth Schedule to the Constitution assigns functions such as maintaining markets and motor parks, providing public conveniences and arranging refuse disposal to the council. It also assigns councils a role alongside state government in primary education and health services.',
          'The chairman is responsible for the executive work assigned to the office under local government law. For example, Kaduna’s Local Government Law makes the chairman the council’s chief executive and accounting officer. It requires the chairman to assign specific executive responsibilities to the vice chairman and supervisors and hold coordination meetings with them no more than one month apart.',
        ],
      },
      {
        title: 'Put council spending through the budget process',
        paragraphs: [
          'In Kaduna, the executive council must prepare annual revenue and spending estimates and submit them to the legislative council. The law requires community input through a town hall before the estimates are treated as approved locally. The state’s budget manual assigns the chairman the task of formally presenting the executive’s proposal to the local legislature.',
          'If the executive proposes repairing a council market, residents can look for the repair in the annual estimates, then check the approved budget and implementation records to see whether the work went ahead.',
        ],
      },
      {
        title: 'Fill a vacancy in the vice chairmanship through the prescribed process',
        paragraphs: [
          'In the FCT, section 116 of the Electoral Act 2026 requires the Chairman to nominate a replacement when the vice chairmanship becomes vacant during the term and to obtain legislative approval before appointing that person. This applies, for example, when the Vice Chairman has stepped up to become Chairman.',
        ],
      },
      {
        title: 'Account for public decisions and declare interests',
        paragraphs: [
          publicOfficeDuty,
          'For example, Kaduna’s law requires a member of the executive council with a financial interest in a contract under discussion to disclose the interest and withdraw from consideration of the matter. Public money remains subject to the rules for budgets and expenditure.',
        ],
      },
    ],
    limits: [
      {
        title: 'Budget approval is shared',
        text: 'A chairman’s proposal must go through the approvals that apply to that council. The executive organises the work after approval, and the relevant council officers handle procurement and delivery under the applicable rules.',
      },
      {
        title: 'Responsibility follows the service',
        text: 'A council’s remit covers facilities and services assigned to it. A state highway or a service run by a separate state agency remains the responsibility of the authority that manages it.',
      },
    ],
    examples: [
      {
        title: 'Waste piling up at a council market',
        text: 'Report the market name and affected area to the council office. Ask which department or contractor manages collection, what schedule applies and when the missed collection will be addressed.',
      },
      {
        title: 'A drain repair announced in your ward',
        text: 'First check who maintains the drain. For a council project, ask for the approved budget line, what work the contract covers and the department responsible for checking completion.',
      },
    ],
    election: {
      represents: 'The whole Local Government Area (LGA), or the whole Area Council in the FCT.',
      selection: 'Voters elect the chairman across the council area. The State Independent Electoral Commission runs state LGA elections. INEC runs FCT Area Council elections.',
      tenure: fctCouncilTerm,
    },
    accountability: [
      'Ask the council office for the approved budget, implementation report or relevant audit record. Compare the work and spending recorded with what residents received.',
      'If the council runs a local budget consultation, give the exact location and problem. Ask whether the final budget includes your request and which department is responsible.',
      'For concerns about how the executive handled a council matter, give your ward councillor the dates, records and location so they can raise it through the legislative council’s procedures.',
    ],
    related: ['local-government-vice-chairman', 'ward-councillor'],
  },
  'local-government-vice-chairman': {
    intro: 'The Vice Chairman is part of the council executive. The office carries assigned work, has a specific role in local boundary matters and takes over the chairmanship when the applicable succession rule requires it.',
    scopeNote: localScope,
    duties: [
      {
        title: 'Carry out the executive work assigned under local law',
        paragraphs: [
          'In Kaduna, the Local Government Law requires the chairman to give the vice chairman specific executive responsibilities, which include supervision of one or more sectors. The chairman must meet regularly with the vice chairman and supervisors to coordinate council work. The law also requires either the chairman or vice chairman to preside when the local executive council meets.',
          'If a vice chairman is assigned the works sector, the assignment identifies the services they supervise. The council office should be able to tell residents which department handles the work and what the current assignment covers.',
        ],
      },
      {
        title: 'Chair the Local Government Boundary Committee in a state LGA',
        paragraphs: [
          'Sections 14 and 15 of the National Boundary Commission (Establishment) Act require every state LGA and FCT Area Council to have a local boundary committee. The Act names the vice chairman of an LGA as chair of its committee.',
          'The committee must meet at least every three months, address boundary disputes between communities and keep the relevant state or FCT boundary committee informed. It must also encourage negotiated settlements and work with neighbouring communities to prevent disputes.',
        ],
      },
      {
        title: 'Take over the chairmanship when the law requires it',
        paragraphs: [
          'In the FCT, if the chairmanship becomes vacant through death, resignation, permanent incapacity or lawful removal, section 116 of the Electoral Act 2026 requires the Vice Chairman to take office as Chairman. Section 111 provides for the Vice Chairman-elect to be sworn in as Chairman if the Chairman-elect dies before taking the oaths.',
          'A short absence is a different situation. Any authority to act temporarily depends on the applicable law or a lawful assignment. In state LGAs, consult the state’s succession rules for the events that trigger a handover.',
        ],
      },
      {
        title: 'Declare assets and avoid conflicts of interest',
        paragraphs: [publicOfficeDuty],
      },
    ],
    limits: [
      {
        title: 'Departmental authority follows the assignment',
        text: 'Check the formal assignment to see what the vice chairman supervises. Spending decisions, contracts and by-laws still follow the rules and approvals that apply to the council.',
      },
      {
        title: 'Boundary disputes go through the committee',
        text: 'The law assigns boundary work to the committee and provides for coordination with the state or FCT boundary committee. The chair runs the committee process. Boundary decisions must follow the relevant legal process.',
      },
    ],
    examples: [
      {
        title: 'A dispute between neighbouring communities',
        text: 'Give the local boundary committee the locations, any available maps and the issue residents need resolved. Ask when it considered the matter, what it recorded and whether it referred the issue to the state or FCT boundary committee.',
      },
      {
        title: 'A council project in the vice chairman’s portfolio',
        text: 'Ask for the office’s assignment, the department delivering the work and the project status. Those records show what the vice chairman oversees and who is expected to complete the work.',
      },
    ],
    election: {
      represents: 'The whole LGA or FCT Area Council.',
      selection: 'In the FCT, the Vice Chairman is the running mate on the chairmanship ticket in the INEC election. For a state LGA, check the applicable election rules and the state commission’s candidate list. A vacancy during the term has a separate replacement process.',
      tenure: fctCouncilTerm,
    },
    accountability: [
      'Ask the council to identify the vice chairman’s current assigned responsibilities and the officers who report on that work.',
      'For a boundary issue, ask for the date of the latest committee meeting, recorded actions and any referral to the state or FCT boundary committee.',
      'After a change of leadership in the FCT, ask the legislative council for the record approving any new Vice Chairman appointed to fill the vacancy.',
    ],
    related: ['local-government-chairman', 'ward-councillor'],
  },
  'ward-councillor': {
    intro: 'A ward councillor holds the ward’s seat in the local legislative council. The councillor’s work is to represent the ward in council proceedings and take part in decisions the law gives to the council collectively.',
    scopeNote: localScope,
    duties: [
      {
        title: 'Serve as the ward’s member of the legislative council',
        paragraphs: [
          'In Kaduna, the law makes councillors elected from each ward the members of the local legislative council. A councillor must make the required assets and liabilities declaration and take the prescribed oaths before carrying out the functions of the office. Council minutes must record the names of members who attended each sitting.',
          'When residents raise a council issue, such as an unsafe council market entrance, the councillor’s representative work takes place through the council’s procedures. Ask whether the issue was put on the agenda or referred to a committee and what action was recorded.',
        ],
      },
      {
        title: 'Take part in collective decisions on by-laws and the budget',
        paragraphs: [
          'By-laws are local rules adopted through the council’s legal process. The legislative council considers and votes on them as a body. For a proposed market rule, the relevant questions are what the proposal says, who is affected and what the council decided.',
          'In Kaduna, the legislative council must consider the executive’s annual budget estimates and decide whether to give initial approval, with or without changes. This is a collective function. Individual councillors take part through council proceedings, such as by scrutinising what a proposed repair covers and voting on the estimates.',
        ],
      },
      {
        title: 'Follow the required accountability procedures',
        paragraphs: [
          'The Code of Conduct applies to councillors. They must declare assets and liabilities at the prescribed times and keep private interests from conflicting with public duties.',
          'In the FCT, section 114 of the Electoral Act 2026 requires the legislative council to decide within 14 days whether to investigate after receiving an allegation of gross misconduct against the Chairman or Vice Chairman signed by at least one third of all members. Opening the investigation requires support from at least two thirds of all members. The procedure also provides for an independent panel and the officeholder’s right to defend themselves.',
        ],
      },
    ],
    limits: [
      {
        title: 'A councillor holds one seat in a collective body',
        text: 'Passing a by-law or approving a budget requires the council’s formal decision. A committee recommendation or a promise by one member is only part of that process.',
      },
      {
        title: 'Service delivery belongs to the responsible executive body',
        text: 'For a missed waste pickup or faulty streetlight under council responsibility, report it to the delivery department. Ask the councillor to raise persistent problems or scrutinise the council’s response through its procedures.',
      },
    ],
    examples: [
      {
        title: 'The council is considering a market by-law',
        text: 'Send your councillor the specific clause and explain how it would affect traders or shoppers in your ward. Ask when it will be considered and what the council eventually adopted.',
      },
      {
        title: 'A ward project was promised',
        text: 'Ask your councillor whether the project was included in the approved local budget and which office is responsible for delivery. For progress or a completion date, follow up with that office.',
      },
    ],
    election: {
      represents: 'One electoral ward within a state LGA or an FCT Area Council.',
      selection: 'Eligible voters in the ward elect the councillor. INEC runs FCT Area Council contests, while the relevant state commission runs state LGA contests.',
      tenure: fctCouncilTerm,
      details: [
        'In the FCT, the Electoral Act provides for recall after a valid petition alleging loss of confidence, signed by at least half of registered voters in the constituency, and approval in a referendum conducted by INEC.',
      ],
    },
    accountability: [
      'Give your councillor the exact street, facility or issue. Ask which council proceeding or committee considered it and where the outcome was recorded.',
      'Ask the legislative clerk for the relevant minutes, votes, budget decision or final text of a by-law. Kaduna law specifically provides for public inspection of the council’s votes and proceedings.',
      'Use the council’s records to check attendance and decisions. Ask the executive department separately for implementation records where the council approved a service or project.',
    ],
    related: ['local-government-chairman', 'local-government-vice-chairman'],
  },
} satisfies Record<string, RoleGuide>;
