ALTER TABLE user_notifications ADD CONSTRAINT
  user_notifications_fkey FOREIGN KEY (value) REFERENCES notification_types;
