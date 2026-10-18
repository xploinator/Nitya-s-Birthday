import test from 'node:test';
import assert from 'node:assert/strict';

// Helper functions for lightbox index math
export function getNextIndex(current: number, total: number): number {
  if (total <= 0) return 0;
  return (current + 1) % total;
}

export function getPrevIndex(current: number, total: number): number {
  if (total <= 0) return 0;
  return (current - 1 + total) % total;
}

// Touch swipe gesture direction helper
export function detectSwipeDirection(startX: number, endX: number, threshold = 40): 'left' | 'right' | 'none' {
  const delta = endX - startX;
  if (delta > threshold) return 'right';
  if (delta < -threshold) return 'left';
  return 'none';
}

// Category filter matcher
export function matchesFilter(cardCategory: string, selectedFilter: string): boolean {
  if (!selectedFilter || selectedFilter === 'all') return true;
  return cardCategory.trim().toLowerCase() === selectedFilter.trim().toLowerCase();
}

// Parallax offset calculator
export function calculateParallaxOffset(scrollY: number, speed: number, baseY = 0): number {
  return parseFloat(((baseY || 0) + scrollY * speed).toFixed(2));
}

// Strict ban check for em-dashes and en-dashes
export function hasNoDashPunctuation(text: string): boolean {
  // Em-dash is \u2014, en-dash is \u2013
  return !/[\u2013\u2014]/.test(text);
}

test('lightbox index circular navigation wraps forward correctly', () => {
  const total = 23;
  assert.equal(getNextIndex(0, total), 1);
  assert.equal(getNextIndex(21, total), 22);
  assert.equal(getNextIndex(22, total), 0); // circular wrap
});

test('lightbox index circular navigation wraps backward correctly', () => {
  const total = 23;
  assert.equal(getPrevIndex(5, total), 4);
  assert.equal(getPrevIndex(1, total), 0);
  assert.equal(getPrevIndex(0, total), 22); // circular wrap
});

test('filtered category circular navigation works with subset total', () => {
  const festiveTotal = 6;
  assert.equal(getNextIndex(0, festiveTotal), 1);
  assert.equal(getNextIndex(5, festiveTotal), 0); // circular wrap on 6 items
  assert.equal(getPrevIndex(0, festiveTotal), 5); // circular wrap back
});

test('touch swipe detection correctly identifies horizontal gestures', () => {
  assert.equal(detectSwipeDirection(100, 200, 40), 'right');
  assert.equal(detectSwipeDirection(200, 100, 40), 'left');
  assert.equal(detectSwipeDirection(100, 120, 40), 'none'); // under threshold
});

test('category filter matching handles all and specific categories', () => {
  assert.equal(matchesFilter('festive moments', 'all'), true);
  assert.equal(matchesFilter('festive moments', 'festive moments'), true);
  assert.equal(matchesFilter('candid chaos', 'festive moments'), false);
  assert.equal(matchesFilter('Celebration Mode', 'celebration mode'), true);
});

test('parallax calculations produce subtle and restrained pixel offsets', () => {
  const scrollY = 200;
  const offset1 = calculateParallaxOffset(scrollY, -0.035, 0);
  const offset2 = calculateParallaxOffset(scrollY, 0.03, 10);
  
  assert.equal(offset1, -7);
  assert.equal(offset2, 16);
  assert.ok(Math.abs(offset1) < 15, 'Parallax movement is subtle and within a few pixels');
});

test('verifies no em-dash or en-dash in copy strings', () => {
  const goodText = 'Crafted with warmth by yuvi for Nitya, celebrating every moment.';
  const badText1 = 'Crafted with warmth — yuvi';
  const badText2 = 'Nitya – A celebration';
  
  assert.equal(hasNoDashPunctuation(goodText), true);
  assert.equal(hasNoDashPunctuation(badText1), false);
  assert.equal(hasNoDashPunctuation(badText2), false);
});
