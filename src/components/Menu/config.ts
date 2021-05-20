import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://1may.finance/',
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
        label: 'PancakeSwap',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x287273776A5e20201F1716228E368a1Db4cfee01',
      },
    ],
  },
  {
    label: 'Price Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0x287273776a5e20201f1716228e368a1db4cfee01-bsc',
      },
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/tokens/0x287273776A5e20201F1716228E368a1Db4cfee01',
      },
      {
        label: 'BoggedFinance',
        href: 'https://charts.bogged.finance/?token=0x287273776A5e20201F1716228E368a1Db4cfee01',
      },
      {
        label: 'DexTools',
        href: 'https://www.dextools.io/app/pancakeswap/pair-explorer/0xc8247e111041399f4d9bb1f3a1a16024a91f036b',
      },
    ],
  },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://bscscan.com/address/0x287273776A5e20201F1716228E368a1Db4cfee01#code',
      }
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
        href: 'https://github.com/1mayfinance',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/1mayfinance/',
      }
    ],
  },
]

export default config
