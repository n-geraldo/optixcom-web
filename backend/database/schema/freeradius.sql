CREATE TABLE IF NOT EXISTS radcheck (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(64) NOT NULL,
  attribute VARCHAR(64) NOT NULL,
  op CHAR(2) NOT NULL DEFAULT ':=',
  value VARCHAR(253) NOT NULL,
  INDEX idx_radcheck_username (username)
);
CREATE TABLE IF NOT EXISTS radreply (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(64) NOT NULL,
  attribute VARCHAR(64) NOT NULL,
  op CHAR(2) NOT NULL DEFAULT '=',
  value VARCHAR(253) NOT NULL,
  INDEX idx_radreply_username (username)
);
CREATE TABLE IF NOT EXISTS radusergroup (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(64) NOT NULL,
  groupname VARCHAR(64) NOT NULL,
  priority INT NOT NULL DEFAULT 1,
  UNIQUE KEY uniq_usergroup (username, groupname)
);
CREATE TABLE IF NOT EXISTS radgroupreply (
  id INT AUTO_INCREMENT PRIMARY KEY,
  groupname VARCHAR(64) NOT NULL,
  attribute VARCHAR(64) NOT NULL,
  op CHAR(2) NOT NULL DEFAULT '=',
  value VARCHAR(253) NOT NULL,
  INDEX idx_radgroupreply_group (groupname)
);
CREATE TABLE IF NOT EXISTS radacct (
  radacctid BIGINT AUTO_INCREMENT PRIMARY KEY,
  acctsessionid VARCHAR(64) NOT NULL,
  acctuniqueid VARCHAR(32) NOT NULL,
  username VARCHAR(64) NOT NULL,
  realm VARCHAR(64),
  nasipaddress VARCHAR(15) NOT NULL,
  nasportid VARCHAR(15),
  nasporttype VARCHAR(32),
  acctstarttime DATETIME,
  acctupdatetime DATETIME,
  acctstoptime DATETIME,
  acctsessiontime INT,
  acctinputoctets BIGINT,
  acctoutputoctets BIGINT,
  framedipaddress VARCHAR(15),
  calledstationid VARCHAR(50),
  callingstationid VARCHAR(50),
  acctterminatecause VARCHAR(32),
  servicetype VARCHAR(32),
  framedprotocol VARCHAR(32),
  INDEX idx_radacct_active (acctstoptime),
  INDEX idx_radacct_username (username)
);
CREATE TABLE IF NOT EXISTS nas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nasname VARCHAR(128) NOT NULL,
  shortname VARCHAR(32),
  type VARCHAR(30) DEFAULT 'other',
  ports INT,
  secret VARCHAR(60) NOT NULL,
  server VARCHAR(64),
  community VARCHAR(50),
  description VARCHAR(200)
);
CREATE TABLE IF NOT EXISTS radpostauth (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(64) NOT NULL,
  pass VARCHAR(64) NOT NULL,
  reply VARCHAR(32) NOT NULL,
  authdate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
