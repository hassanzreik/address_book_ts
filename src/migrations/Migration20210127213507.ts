import { Migration } from '@mikro-orm/migrations';

export class Migration20210127213507 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `countries` modify `is_active` tinyint(1);');

    this.addSql('alter table `contact_addresses` modify `contact_id` bigint unsigned null;');

    this.addSql('alter table `contact_emails` modify `contact_id` bigint unsigned null;');

    this.addSql('alter table `contact_phones` modify `contact_id` bigint unsigned null;');

    this.addSql('alter table `contact_relationships` modify `contact_id` bigint unsigned null, modify `label_id` bigint unsigned null, modify `related_to_id` bigint unsigned null;');

    this.addSql('alter table `contact_social_profiles` modify `contact_id` bigint unsigned null, modify `label_id` bigint unsigned null;');
  }

}
