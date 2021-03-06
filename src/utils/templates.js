import Banner from '../components/templates/Banner'
import ButtonText from '../components/templates/ButtonText'
import FourImage from '../components/templates/FourImage'
import Gallery from '../components/templates/Gallery'
import LargeImage from '../components/templates/LargeImage'
import Linking from '../components/templates/Linking'
import OneImageText from '../components/templates/OneImageText'
import Product from '../components/templates/Product'
import Quote from '../components/templates/Quote'
import SingleButton from '../components/templates/SingleButton'
import TextOnly from '../components/templates/TextOnly'
import ThreeImage from '../components/templates/ThreeImage'
import TwoLargeImage from '../components/templates/TwoLargeImage'
import TwoSmallImage from '../components/templates/TwoSmallImage'
import Video from '../components/templates/Video'
import BannerModal from '../components/modals/BannerModal'
import ButtonTextModal from '../components/modals/ButtonTextModal'
import FourImageModal from '../components/modals/FourImageModal'
import GalleryModal from '../components/modals/GalleryModal'
import LargeImgModal from '../components/modals/LargeImgModal'
import LinkingModal from '../components/modals/LinkingModal'
import OneImageTextModal from '../components/modals/OneImageTextModal'
import ProductListModal from '../components/modals/ProductListModal'
import QuotesModal from '../components/modals/QuotesModal'
import SingleButtonModal from '../components/modals/SingleButtonModal'
import TextOnlyModal from '../components/modals/TextOnlyModal'
import ThreeImageModal from '../components/modals/ThreeImageModal'
import TwoLargeImgModal from '../components/modals/TwoLargeImgModal'
import TwoSmallImgModal from '../components/modals/TwoSmallImgModal'
import VideoModal from '../components/modals/VideoModal'

export const templatesIdx = [
  {
    thumbnailImg: 'banner_temp.png',
    tempName: 'Banner Template'
  },
  {
    thumbnailImg: 'button_text_temp.png',
    tempName: 'Button Text Template'
  },
  {
    thumbnailImg: 'four_img_temp.png',
    tempName: 'Four Image Template'
  },
  {
    thumbnailImg: 'gallery_temp.png',
    tempName: 'Gallery Template'
  },
  {
    thumbnailImg: 'large_img_temp.png',
    tempName: 'Large Image Template'
  },
  {
    thumbnailImg: 'linking_temp.png',
    tempName: 'Linking Template'
  },
  {
    thumbnailImg: 'one_img_text_temp.png',
    tempName: 'One Image Text Template'
  },
  {
    thumbnailImg: 'product_temp.png',
    tempName: 'Product Template'
  },
  {
    thumbnailImg: 'quote_temp.png',
    tempName: 'Quote Template'
  },
  {
    thumbnailImg: 'single_button_temp.png',
    tempName: 'Single Button Template'
  },
  {
    thumbnailImg: 'text_only_temp.png',
    tempName: 'Text Only Template'
  },
  {
    thumbnailImg: 'three_img_temp.png',
    tempName: 'Three Image Template'
  },
  {
    thumbnailImg: 'two_large_img_temp.png',
    tempName: 'Two Large Image Template'
  },
  {
    thumbnailImg: 'two_small_img_temp.png',
    tempName: 'Two Small Image Template'
  },
  {
    thumbnailImg: 'video_temp.png',
    tempName: 'Video Template'
  }
]

export const templatesData = {
  'Banner Template': {
    component: Banner,
    modal: BannerModal,
    id: 'banner-temp'
  },
  'Button Text Template': {
    component: ButtonText,
    modal: ButtonTextModal,
    id: 'button-text-template'
  },
  'Four Image Template': {
    component: FourImage,
    modal: FourImageModal,
    id: 'four-img-template'
  },
  'Gallery Template': {
    component: Gallery,
    modal: GalleryModal,
    id: 'gallery-template'
  },
  'Large Image Template': {
    component: LargeImage,
    modal: LargeImgModal,
    id: 'large-image-temp'
  },
  'Linking Template': {
    component: Linking,
    modal: LinkingModal,
    id: 'linking-temp'
  },
  'One Image Text Template': {
    component: OneImageText,
    modal: OneImageTextModal,
    id: 'one-image-text'
  },
  'Product Template': {
    component: Product,
    modal: ProductListModal,
    id: 'product-list-temp'
  },
  'Quote Template': {
    component: Quote,
    modal: QuotesModal,
    id: 'quotes-template'
  },
  'Single Button Template': {
    component: SingleButton,
    modal: SingleButtonModal,
    id: 'button-text-template'
  },
  'Text Only Template': {
    component: TextOnly,
    modal: TextOnlyModal,
    id: 'text-only-temp'
  },
  'Three Image Template': {
    component: ThreeImage,
    modal: ThreeImageModal,
    id: 'three-img-temp'
  },
  'Two Large Image Template': {
    component: TwoLargeImage,
    modal: TwoLargeImgModal,
    id: 'two-large-image-temp'
  },
  'Two Small Image Template': {
    component: TwoSmallImage,
    modal: TwoSmallImgModal,
    id: 'two-small-image-temp'
  },
  'Video Template': {
    component: Video,
    modal: VideoModal,
    id: 'video-template'
  }
}
