jquery.buttonGroup.js
=====================

Create a bootstrap button group (http://getbootstrap.com/components/#btn-groups) from an input field.

Example usage
-------------

Include the following Scripts in your HTML-Page:

    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
    <script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
    <script src="jquery.buttonGroup.js"></script>
    <script type="text/javascript">
        $('#search-mode').buttonGroup();
    </script>

Create an input element, that has the id search-mode and the data-values attribute:

    <input type="text" name="mode" value="bike" data-values="{bike:'Bicylce',car:'Car',train:'Train'}" />

The plugin will automatically create the bootstrap markup for the button group.
