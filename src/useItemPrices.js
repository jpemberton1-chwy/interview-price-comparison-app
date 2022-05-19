import { useMemo } from 'react';

/**
 * @return {Array}
 *   An array representing a list of records.
 *   The record always begins with the item's ID and name;
 *   the price list is progressive discounts by quantity
 *   purchased (up to 3).
 */
export default function useItemPrices() {
  return useMemo(() => {
    const itemPriceRecords = [
      ['item-1095', 'Comfy Dog Bed', 100, 175, 225],
      ['item-2013', 'Blue Buffalo Dog Treats', 8, 15, 22.95],
      ['item-133', 'Awoo! Cute Dog Hoodie', 15.95, 24.95, 32.95],
      ['item-99', 'Blue Buffalo Puppy Formula', 12.95, 19.95, 23.95],
      ['item-1011', 'Puppy Eye Drops (Rx)', 8.95, 12.95, 15.95],
      ['item-1013', 'American Journey Heart Health Recipe', 49.95, 79.95, 115.95],
      ['item-1015', 'American Journey Fitness Recipe', 39.95, 69.95, 109.95],
    ];

    return itemPriceRecords;
  }, []);
}
