import {Injectable} from '@angular/core';

@Injectable()
export class HieroglyphConvertService {
  private readonly table: Record<string, string> = {
    a: '𓄿',
    b: '𓃀',
    c:'𓎡',
    d:'𓂧',
    e:'𓇋',
    f:'𓆑',
    g:'𓎼',
    h:'𓎛',
    i:'𓇋',
    j:'𓆓',
    k:'𓎡',
    l:'𓃭',
    m:'𓅓',
    n:'𓈖',
    o:'𓍯',
    p:'𓏤',
    q:'𓏘',
    r:'𓂋',
    s:'𓋴',
    t:'𓏏',
    u:'𓅱',
    v:'𓆑',
    w:'𓅱',
    x:'𓎡𓋴',
    y:'𓇋',
    z:'𓊃'
  } as const;


  public toHieroglyph(japanese: string): string {
    const charList = japanese.toLowerCase().split('');
    return charList.map(c => this.table[c] || c).join('');
  }
}