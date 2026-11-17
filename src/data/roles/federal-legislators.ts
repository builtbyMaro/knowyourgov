import type { RoleGuide } from './types';

// Constitutional basis: sections 4, 48–49, 52, 56, 58–59, 62–64, 68–71,
// 80–81, 85(5), 88–89 and 147, plus the Fifth and Seventh Schedules.
export const federalLegislatorGuides = {
  senator: {
    intro: 'A senator represents a senatorial district in the National Assembly. A senator must comply with rules on taking office, attendance and financial interests. In the Senate, members decide together on federal bills, spending and appointments that require Senate confirmation.',
    duties: [
      {
        title: 'Declare assets and take the oaths before taking the seat',
        paragraphs: [
          'An elected senator must declare assets and liabilities and take the Oath of Allegiance and the oath of membership before taking the seat. The Constitution allows members-elect to participate in electing the Senate President and Deputy Senate President before taking those oaths. The public officer code also requires a declaration at the end of the term.',
        ],
      },
      {
        title: 'Attend sittings and disclose direct financial interests',
        paragraphs: [
          'A senator must vacate the seat after missing more than one-third of the Senate’s meeting days in a year without just cause, once the chamber has satisfactory evidence and the Senate President gives effect to the rule. The Senate itself is required to sit for at least 181 days a year.',
          'Senate rules must require members to disclose a direct financial interest in a matter under debate. For example, a senator who has a direct financial stake in a company affected by a bill must disclose that interest when taking part. A member who first signals that they will stay out of both debate and voting, and then does so, is exempt from that disclosure under this rule.',
        ],
      },
      {
        title: 'Decide on federal bills and spending as a chamber',
        paragraphs: [
          'The Senate shares federal lawmaking with the House of Representatives. An ordinary federal bill must pass both chambers in an agreed form and ordinarily requires presidential assent. The Constitution sets out how both chambers may override withheld assent and provides separate procedures for money bills.',
          'When the President submits federal spending estimates, senators scrutinise the proposal through the Senate’s budget process. A senator’s vote is part of the chamber’s decision. The resulting budget provides legal authority to spend, and federal ministries and agencies carry out the spending.',
        ],
      },
      {
        title: 'Send federal audit reports to the public accounts committee',
        paragraphs: [
          'The Constitution requires the Senate to have the Auditor-General for the Federation’s reports considered by its public accounts committee. Members on the committee review the findings for the chamber. For example, if a report identifies a payment without adequate records, committee scrutiny can ask the responsible agency to account for it.',
          'The Senate’s separate power to investigate under sections 88 and 89 belongs to the chamber and duly authorised committees. Its purposes include improving federal laws and exposing waste, inefficiency or corruption involving federal spending or administration within its remit.',
        ],
      },
      {
        title: 'Handle presidential nominations through the Senate',
        paragraphs: [
          'The Constitution assigns the Senate a confirmation role for appointments such as federal ministers. Senators take part in the chamber’s screening and decision under its rules. The President makes the nomination, and confirmation is a Senate decision.',
          'For federal ministers, the Constitution treats an appointment as made if the Senate sends no response within 21 working days after receiving the nomination. The screening process gives the chamber an opportunity to question nominees and decide within that period.',
        ],
      },
    ],
    limits: [
      { title: 'Federal projects are managed by the responsible agency', text: 'A senator may raise a delayed federal road project in an appropriate Senate forum. The agency in charge of the road handles procurement, supervision and payment under the applicable rules.' },
      { title: 'Investigations follow chamber procedures', text: 'The Senate or an authorised committee exercises the constitutional power to require evidence for an inquiry. The inquiry must fall within the legal purposes set for legislative investigations.' },
      { title: 'State and local services have their own responsible authorities', text: 'For repairs to a state-owned hospital or a council market, first identify the state or local body responsible. A senator represents the district in the federal legislature.' },
    ],
    examples: [
      { title: 'A nominee for federal minister appears before the Senate', text: 'Follow the Senate’s screening and proceedings to see which questions members raised and what decision the chamber took. Questions about a nominee and the final appointment are separate steps.' },
      { title: 'A federal road project appears in the budget', text: 'Check the approved budget for the project and its implementing agency. Ask your senator what scrutiny the proposal received, then check with the agency for the contract, funding and progress.' },
      { title: 'A proposed federal law affects your business', text: 'Find the bill title and its Senate stage. Send your senator the provision that affects you and describe the change you want considered. Follow both chambers to see whether the same text passes.' },
    ],
    election: {
      represents: 'One senatorial district. Each state elects three senators and the Federal Capital Territory elects one.',
      selection: 'Registered voters elect their senator in an election conducted by INEC in their district.',
      tenure: 'A normal Senate term is four years from its first sitting. A member may leave office earlier under the Constitution.',
      details: ['Use official constituency information to identify your senatorial district. Your House of Representatives member is elected in a separate federal constituency contest.'],
    },
    accountability: [
      'Check the Senate’s Order Paper for scheduled business and its Votes and Proceedings for the recorded outcome. The records can also show committee referrals and motions.',
      'Ask your senator for the bill number, amendment, committee report or other record behind a claim about their work.',
      'Check the agency’s implementation record for a project the senator says they supported. Compare the approved budget, contract status and work on the ground.',
      'Registered voters in the district have a constitutional recall process through INEC that requires a verified petition and a referendum.',
    ],
    related: ['house-of-representatives-member', 'president', 'state-house-of-assembly-member'],
  },
  'house-of-representatives-member': {
    intro: 'A member of the House of Representatives represents one federal constituency. The role involves complying with the rules for taking and keeping the seat and participating in the House’s work on federal laws, budgets and public accounts.',
    duties: [
      {
        title: 'Declare assets and take the oaths before taking the seat',
        paragraphs: [
          'A member-elect must declare assets and liabilities and take the Oath of Allegiance and the oath of membership before taking the seat. The Constitution allows members-elect to participate in electing the Speaker and Deputy Speaker before taking those oaths. The public officer code also requires a declaration at the end of the term.',
        ],
      },
      {
        title: 'Attend sittings and follow the financial interest rules',
        paragraphs: [
          'The House must sit for at least 181 days a year. A member who, without just cause, misses more than one-third of its meeting days in a year must vacate the seat once the chamber has satisfactory evidence and the Speaker gives effect to the rule.',
          'House rules must require members to disclose a direct financial interest in a matter under debate. The House may decide whether that member can speak or vote on the matter. A member who gives notice that they will refrain from both debate and voting, and then does so, is exempt from that disclosure under this rule.',
        ],
      },
      {
        title: 'Decide on the text of federal bills together',
        paragraphs: [
          'Members debate bills and vote under the House’s procedures. For an ordinary federal bill to become law, the House and Senate must agree on the text. Presidential assent normally follows, with a constitutional override procedure if assent is withheld.',
          'A proposed rule on a federal matter, such as a change to customs law, may be amended during this process. Track the bill number and final text to see what the House actually approved.',
        ],
      },
      {
        title: 'Consider federal spending and review the accounts',
        paragraphs: [
          'The House considers federal spending proposals under the Constitution’s budget and money bill procedures. Its decisions help determine which proposed programmes get legal approval to spend public funds. For example, members scrutinise proposed allocations to a federal teaching hospital or a federal road agency during budget consideration.',
          'The Constitution requires the House to have reports from the Auditor-General for the Federation considered by its public accounts committee. The committee reviews those reports for the House. A finding about unexplained expenditure calls for scrutiny of the agency responsible for the payment.',
        ],
      },
    ],
    limits: [
      { title: 'The House makes decisions collectively', text: 'Raising an issue from the constituency is part of representation. A member’s speech, motion or vote contributes to a chamber decision, and an ordinary federal law goes through both chambers.' },
      { title: 'Committees act under authority from the House', text: 'Public petitions and inquiries follow House procedures. The House or a duly authorised committee exercises the constitutional power to require evidence within the limits on legislative investigations.' },
      { title: 'Agencies deliver public projects', text: 'The agency responsible for a public project handles its contract, payments and delivery. A member’s role is in legislation, representation and scrutiny of federal work.' },
    ],
    examples: [
      { title: 'A federal agency has left a local complaint unresolved', text: 'Write down the relevant dates, correspondence and the outcome you want. Ask your member about submitting a public petition and check whether the House referred it to its Committee on Public Petitions.' },
      { title: 'A federal teaching hospital needs equipment', text: 'During budget consideration, check the proposed and approved line items. Ask your member what the House reviewed. Ask the hospital or its supervising agency about procurement and delivery.' },
      { title: 'A member says the House passed a bill affecting your area', text: 'Check the bill number, what the House passed and whether the Senate agreed to the same text. Follow the bill through the rest of the process to see whether it became law.' },
    ],
    election: {
      represents: 'One of Nigeria’s 360 federal constituencies, including those in the Federal Capital Territory.',
      selection: 'Registered voters elect their House member in an election conducted by INEC in that constituency.',
      tenure: 'A normal House term is four years from its first sitting. A member may leave office earlier under the Constitution.',
      details: ['Check your federal constituency with INEC. Federal and State House of Assembly constituencies are separate seats and may cover different areas.'],
    },
    accountability: [
      'Check House Votes and Proceedings and committee reports for what was debated, referred or agreed. For a petition, ask your member for the reference and stage.',
      'Ask for specifics when a member claims to have addressed a problem. Useful details include a motion number, the committee involved and the federal agency asked to respond.',
      'When a project is reported as approved, check the implementing agency and follow its progress after the budget vote.',
      'Registered voters in the constituency have a constitutional recall process through INEC that requires a verified petition and a referendum.',
    ],
    related: ['senator', 'president', 'state-house-of-assembly-member'],
  },
} satisfies Record<string, RoleGuide>;
