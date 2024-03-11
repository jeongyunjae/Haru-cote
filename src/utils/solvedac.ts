export type SolvedacTierType =
  | 'Unrated'
  | 'Bronze'
  | 'Silver'
  | 'Gold'
  | 'Platinum'
  | 'Diamond'
  | 'Ruby'

export type SolvedacLevelType = '' | 'V' | 'IV' | 'III' | 'II' | 'I'

export type TierLevelType = {
  tier: SolvedacTierType
  level: SolvedacLevelType
}

export const tierLevel: TierLevelType[] = [
  {
    tier: 'Unrated',
    level: '',
  },
  {
    tier: 'Bronze',
    level: 'V',
  },
  {
    tier: 'Bronze',
    level: 'IV',
  },
  {
    tier: 'Bronze',
    level: 'III',
  },
  {
    tier: 'Bronze',
    level: 'II',
  },
  {
    tier: 'Bronze',
    level: 'I',
  },
  {
    tier: 'Silver',
    level: 'V',
  },
  {
    tier: 'Silver',
    level: 'IV',
  },
  {
    tier: 'Silver',
    level: 'III',
  },
  {
    tier: 'Silver',
    level: 'II',
  },
  {
    tier: 'Silver',
    level: 'I',
  },
  {
    tier: 'Gold',
    level: 'V',
  },
  {
    tier: 'Gold',
    level: 'IV',
  },
  {
    tier: 'Gold',
    level: 'III',
  },
  {
    tier: 'Gold',
    level: 'II',
  },
  {
    tier: 'Gold',
    level: 'I',
  },
  {
    tier: 'Platinum',
    level: 'V',
  },
  {
    tier: 'Platinum',
    level: 'IV',
  },
  {
    tier: 'Platinum',
    level: 'III',
  },
  {
    tier: 'Platinum',
    level: 'II',
  },
  {
    tier: 'Platinum',
    level: 'I',
  },
  {
    tier: 'Diamond',
    level: 'V',
  },
  {
    tier: 'Diamond',
    level: 'IV',
  },
  {
    tier: 'Diamond',
    level: 'III',
  },
  {
    tier: 'Diamond',
    level: 'II',
  },
  {
    tier: 'Diamond',
    level: 'I',
  },
  {
    tier: 'Ruby',
    level: 'V',
  },
  {
    tier: 'Ruby',
    level: 'IV',
  },
  {
    tier: 'Ruby',
    level: 'III',
  },
  {
    tier: 'Ruby',
    level: 'II',
  },
  {
    tier: 'Ruby',
    level: 'I',
  },
]
