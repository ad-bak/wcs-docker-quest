/**
 * In this challenge, you must find and attach to each ad the ad (or ads)
 * with which the current ad has the most tags in common. This algo will
 * be very useful to get similar products of a given product.
 * Attached ads must be sorted by their title (A to Z).
 * You must not change the order of the main list of ads.
 *
 * @param ads List of ads without closestAds
 * @returns The same list but with a new closestAds prop on each
 */

// ↓ uncomment bellow lines and add your response!
export default function ({
  ads,
}: {
  ads: AdWithTags[];
}): AdWithTagsAndClosestAds[] {
  return ads.map((ad) => {
    let maxCommonTags = 0;
    const adsWithCommonTags = ads
      .filter((a) => a.title !== ad.title)
      .map((a) => {
        const commonTagsCount = ad.tags.filter((tag) =>
          a.tags.includes(tag)
        ).length;

        maxCommonTags = Math.max(maxCommonTags, commonTagsCount);
        return { commonTagsCount, ad: a };
      });

    const closestAds = adsWithCommonTags
      .filter((a) => a.commonTagsCount === maxCommonTags && maxCommonTags > 0)
      .map((a) => a.ad);

    closestAds.sort((a, b) => a.title.localeCompare(b.title));

    return {
      ...ad,
      closestAds: closestAds,
    };
  });
}

// used interfaces, do not touch
export interface AdWithTags {
  title: string;
  price: number;
  tags: string[];
}

export interface AdWithTagsAndClosestAds extends AdWithTags {
  closestAds: AdWithTags[];
}
