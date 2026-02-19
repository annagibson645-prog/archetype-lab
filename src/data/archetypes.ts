import type { Archetype } from '../types';
import { batch1 } from './batch1';
import { batch2 } from './batch2';
import { batch3 } from './batch3';
import { batch4 } from './batch4';

// Combine all batches into a single master list
// Total: ~100 Archetypes
export const archetypes: Archetype[] = [
    ...batch1,
    ...batch2,
    ...batch3,
    ...batch4
];
