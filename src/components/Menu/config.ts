import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://bollo.me/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
      {
        label: 'PancakeSwap Bolo',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x1921168344840d1ca5acd82e8815f24582d4ad27',
      },
      {
        label: 'PancakeSwap BoloX',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x1921168344840d1ca5acd82e8815f24582d4ad27',
      },
    ],
  },
  {
    label: 'Price Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Bolo@DexGuru',
        href: 'https://dex.guru/token/0x1921168344840d1ca5acd82e8815f24582d4ad27-bsc',
      },
      {
        label: 'Bolo@PooCoin',
        href: 'https://poocoin.app/tokens/0x1921168344840d1ca5acd82e8815f24582d4ad27',
      },
      {
        label: 'BoloX@DexGuru',
        href: 'https://dex.guru/token/0x1921168344840d1ca5acd82e8815f24582d4ad27-bsc',
      },
      {
        label: 'BoloX@PooCoin',
        href: 'https://poocoin.app/tokens/0x1921168344840d1ca5acd82e8815f24582d4ad27',
      },

    ],
  },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      {
        label: 'Bolo',
        href: 'https://bscscan.com/address/0x1921168344840d1ca5acd82e8815f24582d4ad27',
      },
      {
        label: 'BoloX',
        href: 'https://bscscan.com/address/0x287273776A5e20201F1716228E368a1Db4cfee01',
      },

    ],
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://pancakeswap.finance/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://pancakeswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://pancakeswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://pancakeswap.finance/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://pancakeswap.finance/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/BolloProject',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/BolloProject/',
      }
    ],
  },
]

export default config
