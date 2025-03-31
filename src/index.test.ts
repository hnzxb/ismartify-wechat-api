import { describe, it, expect } from 'vitest';
import { hello } from './index';

describe('hello', () => {
  it('should return hello message', () => {
    expect(hello()).toBe('Hello from @ismartify/wechat-api!');
  });
}); 