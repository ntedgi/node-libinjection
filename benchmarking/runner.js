
const Benchmarkify = require("benchmarkify");
const { SQLInjection } = require('../index');
const perfectExpressSanitizer = require("perfect-express-sanitizer");
const sqli = new SQLInjection();

const payloads = `
sleep(__TIME__)#
1 or sleep(__TIME__)#
" or sleep(__TIME__)#
' or sleep(__TIME__)#
" or sleep(__TIME__)="
' or sleep(__TIME__)='
1) or sleep(__TIME__)#
") or sleep(__TIME__)="
') or sleep(__TIME__)='
1)) or sleep(__TIME__)#
")) or sleep(__TIME__)="
')) or sleep(__TIME__)='
;waitfor delay '0:0:__TIME__'--
);waitfor delay '0:0:__TIME__'--
';waitfor delay '0:0:__TIME__'--
";waitfor delay '0:0:__TIME__'--
');waitfor delay '0:0:__TIME__'--
");waitfor delay '0:0:__TIME__'--
));waitfor delay '0:0:__TIME__'--
'));waitfor delay '0:0:__TIME__'--
"));waitfor delay '0:0:__TIME__'--
benchmark(10000000,MD5(1))#
1 or benchmark(10000000,MD5(1))#
" or benchmark(10000000,MD5(1))#
' or benchmark(10000000,MD5(1))#
1) or benchmark(10000000,MD5(1))#
") or benchmark(10000000,MD5(1))#
') or benchmark(10000000,MD5(1))#
1)) or benchmark(10000000,MD5(1))#
")) or benchmark(10000000,MD5(1))#
')) or benchmark(10000000,MD5(1))#
; --
'; --
'); --
'; exec master..xp_cmdshell 'ping 10.10.1.2'--
' grant connect to name; grant resource to name; --
' or 1=1 -- 
' union (select @@version) --
' union (select NULL, (select @@version)) --
' union (select NULL, NULL, (select @@version)) --
' union (select NULL, NULL, NULL, NULL,  NULL, (select @@version)) --
' union (select NULL, NULL, NULL,  (select @@version)) --
' union (select NULL, NULL, NULL, NULL,  (select @@version)) --
'; if not(substring((select @@version),25,1) <> 0) waitfor delay '0:0:2' --
'; if not(substring((select @@version),25,1) <> 5) waitfor delay '0:0:2' --
'; if not(substring((select @@version),25,1) <> 8) waitfor delay '0:0:2' --
'; if not(substring((select @@version),24,1) <> 1) waitfor delay '0:0:2' --
'; if not(select system_user) <> 'sa' waitfor delay '0:0:2' --
'; if is_srvrolemember('sysadmin') > 0 waitfor delay '0:0:2' -- 
'; if not((select serverproperty('isintegratedsecurityonly')) <> 1) waitfor delay '0:0:2' --
'; if not((select serverproperty('isintegratedsecurityonly')) <> 0) waitfor delay '0:0:2' --
1'1
1 exec sp_ (or exec xp_)
1 and 1=1
1' and 1=(select count(*) from tablenames); --
1 or 1=1
1' or '1'='1
1or1=1
1'or'1'='1
fake@ema'or'il.nl'='il.nl
1
1 and user_name() = 'dbo'
\\'; desc users; --
1\\'1
1' and non_existant_table = '1
' or username is not NULL or username = '
1 and ascii(lower(substring((select top 1 name from sysobjects where xtype='u'), 1, 1))) > 116
1 union all select 1,2,3,4,5,6,name from sysobjects where xtype = 'u' --
1 uni/**/on select all from where
’ or ‘1’=’1
' or '1'='1
'||utl_http.request('httP://192.168.1.1/')||'
' || myappadmin.adduser('admin', 'newpass') || '
' AND 1=utl_inaddr.get_host_address((SELECT banner FROM v$version WHERE ROWNUM=1)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT SYS.LOGIN_USER FROM DUAL)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT SYS.DATABASE_NAME FROM DUAL)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT host_name FROM v$instance)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT global_name FROM global_name)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT COUNT(DISTINCT(USERNAME)) FROM SYS.ALL_USERS)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT COUNT(DISTINCT(PASSWORD)) FROM SYS.USER$)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT COUNT(DISTINCT(table_name)) FROM sys.all_tables)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT COUNT(DISTINCT(column_name)) FROM sys.all_tab_columns)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT COUNT(DISTINCT(GRANTED_ROLE)) FROM DBA_ROLE_PRIVS WHERE GRANTEE=SYS.LOGIN_USER)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(USERNAME) FROM (SELECT DISTINCT(USERNAME), ROWNUM AS LIMIT FROM SYS.ALL_USERS) WHERE LIMIT=1)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(PASSWORD) FROM (SELECT DISTINCT(PASSWORD), ROWNUM AS LIMIT FROM SYS.USER$) WHERE LIMIT=1)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(table_name) FROM (SELECT DISTINCT(table_name), ROWNUM AS LIMIT FROM sys.all_tables) WHERE LIMIT=1)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(column_name) FROM (SELECT DISTINCT(column_name), ROWNUM AS LIMIT FROM all_tab_columns) WHERE LIMIT=1)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(granted_role) FROM (SELECT DISTINCT(granted_role), ROWNUM AS LIMIT FROM dba_role_privs WHERE GRANTEE=SYS.LOGINUSER) WHERE LIMIT=1)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(USERNAME) FROM (SELECT DISTINCT(USERNAME), ROWNUM AS LIMIT FROM SYS.ALL_USERS) WHERE LIMIT=2)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(PASSWORD) FROM (SELECT DISTINCT(PASSWORD), ROWNUM AS LIMIT FROM SYS.USER$) WHERE LIMIT=2)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(table_name) FROM (SELECT DISTINCT(table_name), ROWNUM AS LIMIT FROM sys.all_tables) WHERE LIMIT=2)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(column_name) FROM (SELECT DISTINCT(column_name), ROWNUM AS LIMIT FROM all_tab_columns) WHERE LIMIT=2)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(granted_role) FROM (SELECT DISTINCT(granted_role), ROWNUM AS LIMIT FROM dba_role_privs WHERE GRANTEE=SYS.LOGINUSER) WHERE LIMIT=2)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(USERNAME) FROM (SELECT DISTINCT(USERNAME), ROWNUM AS LIMIT FROM SYS.ALL_USERS) WHERE LIMIT=3)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(PASSWORD) FROM (SELECT DISTINCT(PASSWORD), ROWNUM AS LIMIT FROM SYS.USER$) WHERE LIMIT=3)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(table_name) FROM (SELECT DISTINCT(table_name), ROWNUM AS LIMIT FROM sys.all_tables) WHERE LIMIT=3)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(column_name) FROM (SELECT DISTINCT(column_name), ROWNUM AS LIMIT FROM all_tab_columns) WHERE LIMIT=3)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(granted_role) FROM (SELECT DISTINCT(granted_role), ROWNUM AS LIMIT FROM dba_role_privs WHERE GRANTEE=SYS.LOGINUSER) WHERE LIMIT=3)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(USERNAME) FROM (SELECT DISTINCT(USERNAME), ROWNUM AS LIMIT FROM SYS.ALL_USERS) WHERE LIMIT=4)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(PASSWORD) FROM (SELECT DISTINCT(PASSWORD), ROWNUM AS LIMIT FROM SYS.USER$) WHERE LIMIT=4)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(table_name) FROM (SELECT DISTINCT(table_name), ROWNUM AS LIMIT FROM sys.all_tables) WHERE LIMIT=4)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(column_name) FROM (SELECT DISTINCT(column_name), ROWNUM AS LIMIT FROM all_tab_columns) WHERE LIMIT=4)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(granted_role) FROM (SELECT DISTINCT(granted_role), ROWNUM AS LIMIT FROM dba_role_privs WHERE GRANTEE=SYS.LOGINUSER) WHERE LIMIT=4)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(USERNAME) FROM (SELECT DISTINCT(USERNAME), ROWNUM AS LIMIT FROM SYS.ALL_USERS) WHERE LIMIT=5)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(PASSWORD) FROM (SELECT DISTINCT(PASSWORD), ROWNUM AS LIMIT FROM SYS.USER$) WHERE LIMIT=5)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(table_name) FROM (SELECT DISTINCT(table_name), ROWNUM AS LIMIT FROM sys.all_tables) WHERE LIMIT=5)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(column_name) FROM (SELECT DISTINCT(column_name), ROWNUM AS LIMIT FROM all_tab_columns) WHERE LIMIT=5)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(granted_role) FROM (SELECT DISTINCT(granted_role), ROWNUM AS LIMIT FROM dba_role_privs WHERE GRANTEE=SYS.LOGINUSER) WHERE LIMIT=5)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(USERNAME) FROM (SELECT DISTINCT(USERNAME), ROWNUM AS LIMIT FROM SYS.ALL_USERS) WHERE LIMIT=6)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(PASSWORD) FROM (SELECT DISTINCT(PASSWORD), ROWNUM AS LIMIT FROM SYS.USER$) WHERE LIMIT=6)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(table_name) FROM (SELECT DISTINCT(table_name), ROWNUM AS LIMIT FROM sys.all_tables) WHERE LIMIT=6)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(column_name) FROM (SELECT DISTINCT(column_name), ROWNUM AS LIMIT FROM all_tab_columns) WHERE LIMIT=6)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(granted_role) FROM (SELECT DISTINCT(granted_role), ROWNUM AS LIMIT FROM dba_role_privs WHERE GRANTEE=SYS.LOGINUSER) WHERE LIMIT=6)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(USERNAME) FROM (SELECT DISTINCT(USERNAME), ROWNUM AS LIMIT FROM SYS.ALL_USERS) WHERE LIMIT=7)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(PASSWORD) FROM (SELECT DISTINCT(PASSWORD), ROWNUM AS LIMIT FROM SYS.USER$) WHERE LIMIT=7)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(table_name) FROM (SELECT DISTINCT(table_name), ROWNUM AS LIMIT FROM sys.all_tables) WHERE LIMIT=7)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(column_name) FROM (SELECT DISTINCT(column_name), ROWNUM AS LIMIT FROM all_tab_columns) WHERE LIMIT=7)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(granted_role) FROM (SELECT DISTINCT(granted_role), ROWNUM AS LIMIT FROM dba_role_privs WHERE GRANTEE=SYS.LOGINUSER) WHERE LIMIT=7)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(USERNAME) FROM (SELECT DISTINCT(USERNAME), ROWNUM AS LIMIT FROM SYS.ALL_USERS) WHERE LIMIT=8)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(PASSWORD) FROM (SELECT DISTINCT(PASSWORD), ROWNUM AS LIMIT FROM SYS.USER$) WHERE LIMIT=8)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(table_name) FROM (SELECT DISTINCT(table_name), ROWNUM AS LIMIT FROM sys.all_tables) WHERE LIMIT=8)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(column_name) FROM (SELECT DISTINCT(column_name), ROWNUM AS LIMIT FROM all_tab_columns) WHERE LIMIT=8)) AND 'i'='i
' AND 1=utl_inaddr.get_host_address((SELECT DISTINCT(granted_role) FROM (SELECT DISTINCT(granted_role), ROWNUM AS LIMIT FROM dba_role_privs WHERE GRANTEE=SYS.LOGINUSER) WHERE LIMIT=8)) AND 'i'='i
`.split('\n')

const benchmark = new Benchmarkify("Find SQL Inject", { description: "check sql Injection in string", chartImage: true }).printHeader();

// Create a test suite
benchmark.createSuite("has Sql Injection", { time: 10000, minSamples: 100, description: "Concatenate string in different ways" })

    .add("using libinjection", () => {
        const result = []
        payloads.forEach(payload => {
            result.push(sqli.has(payload));
        });
        return result
    })
    .ref("perfect-express-sanitizer",async (done) => {
        const result = []
        for (let i = 0; i < payloads.length; i++) {
            result.push(await perfectExpressSanitizer.sanitize.detectSqlInj(payloads[i], 5));
        }   
        done(null, result)
    });

benchmark.run();