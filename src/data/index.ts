import { Campaign, ProgramState, Transaction } from '@/utils/interfaces'

const nowSec = Math.floor(Date.now() / 1000)

export const campaigns: Campaign[] = [
  {
    publicKey: '0x1234567890abcdef',
    cid: 1,
    creator: '0x1234567890abcdef',
    title: 'Save the Whales',
    description: 'A campaign to fund marine conservation efforts.',
    imageUrl: 'https://dummyjson.com/image/400x200/282828',
    goal: 10000,
    amountRaised: 5600,
    timestamp: Date.now(),
    donors: 123,
    withdrawals: 2,
    balance: 5600 - 10000,
    active: true,
    deadline: nowSec + 3600,
  },
  {
    publicKey: '0x9876543210fedcba',
    cid: 2,
    creator: '0x9876543210fedcba',
    title: 'Solar for Schools',
    description: 'Bringing solar power to schools around the globe.',
    imageUrl: 'https://dummyjson.com/image/400x200/282828',
    goal: 50000,
    amountRaised: 23456,
    timestamp: Date.now() - 86_400_000, // 1 day ago
    donors: 456,
    withdrawals: 1,
    balance: 23456 - 50000,
    active: true,
    deadline: nowSec + 24 * 3600,
  },
  {
    publicKey: '0x5555555555555555',
    cid: 3,
    creator: '0x5555555555555555',
    title: 'Art for All',
    description: 'Supporting local artists and art education programs.',
    imageUrl: 'https://dummyjson.com/image/400x200/282828',
    goal: 15000,
    amountRaised: 14999,
    timestamp: Date.now() - 7 * 86_400_000, // 7 days ago
    donors: 789,
    withdrawals: 3,
    balance: 14999 - 15000,
    active: false,
    deadline: nowSec + 2 * 3600,
  },
  {
    publicKey: '0xaaaaaaaabbbbbbbb',
    cid: 4,
    creator: '0xaaaaaaaabbbbbbbb',
    title: 'Books for Kids',
    description: 'Providing books to underprivileged children.',
    imageUrl: 'https://dummyjson.com/image/400x200/282828',
    goal: 8000,
    amountRaised: 7980,
    timestamp: Date.now() - 30 * 86_400_000, // 30 days ago
    donors: 321,
    withdrawals: 0,
    balance: 7980 - 8000,
    active: true,
    deadline: nowSec - 3600,
  },
  {
    publicKey: '0xcccdddddeeeeefff',
    cid: 5,
    creator: '0xcccdddddeeeeefff',
    title: 'Clean Water Initiative',
    description: 'Ensuring clean water access in developing communities.',
    imageUrl: 'https://dummyjson.com/image/400x200/282828',
    goal: 20000,
    amountRaised: 10000,
    timestamp: Date.now() - 90 * 86_400_000, // 90 days ago
    donors: 654,
    withdrawals: 2,
    balance: 10000 - 20000,
    active: true,
    deadline: nowSec - 24 * 3600,
  },
]

export const dummyTransactions: Transaction[] = [
  {
    publicKey: 'TransactionPublicKey1',
    owner: 'DonorAddress1',
    cid: 1,
    amount: 100,
    timestamp: Date.now() - 86_400_000, // 1 day ago
    credited: true,
  },
  {
    publicKey: 'TransactionPublicKey2',
    owner: 'DonorAddress2',
    cid: 1,
    amount: 200,
    timestamp: Date.now() - 43_200_000, // 12 hours ago
    credited: true,
  },
  {
    publicKey: 'TransactionPublicKey3',
    owner: 'OwnerAddress1',
    cid: 1,
    amount: 300,
    timestamp: Date.now() - 21_600_000, // 6 hours ago
    credited: false,
  },
  {
    publicKey: 'TransactionPublicKey4',
    owner: 'OwnerAddress2',
    cid: 1,
    amount: 100,
    timestamp: Date.now() - 10_800_000, // 3 hours ago
    credited: false,
  },
]

export const dummyProgramState: ProgramState = {
  initialized: true,
  campaignCount: 50,
  platformFee: 5,
  platformAddress: '0x1234567890abcdef',
}
