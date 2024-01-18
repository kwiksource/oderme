function Validate()
{
if (checkEmail(document.nxform.Email.value))
	return true;
else
	{
		alert("<cfoutput>#label.emailinv#</cfoutput>.  (____@____.___)");
		return false;
	}
}	