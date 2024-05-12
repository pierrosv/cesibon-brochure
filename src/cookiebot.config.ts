import { NgxCookiebotConfig } from '@halloverden/ngx-cookiebot';

export class CookiebotConfig extends NgxCookiebotConfig {
  override blockingMode: 'auto' | 'manual' | string = 'manual';
  override cbId = '75441582-830b-4e1d-bfd8-34468486ec47';
  override cdn: 'com' | 'eu' | string = 'eu';
  override culture?: string;
  override framework?: string;
  override level?: string;
  override loadScript = true;
  override type?: string;
}
