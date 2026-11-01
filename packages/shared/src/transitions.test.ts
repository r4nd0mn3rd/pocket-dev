import { test } from 'node:test';
import assert from 'node:assert/strict';
import { availableActions, transition } from './transitions.js';

test('pending task can start', () => {
  const t: any = { id: '1', name: 'x', phase: 0, priority: 'medium', status: 'pending' };
  assert.deepEqual(availableActions('pending'), ['start']);
  assert.equal(transition(t, 'start').status, 'in-progress');
});

test('in-progress can complete', () => {
  const t: any = { id: '1', name: 'x', phase: 0, priority: 'medium', status: 'in-progress' };
  assert.equal(transition(t, 'complete').status, 'completed');
});
